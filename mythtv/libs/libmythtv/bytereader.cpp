/*
 * find_start_code from libavcodec/FFmpeg
 * Copyright (c) 2022 Scott Theisen
 *
 * This file is part of MythTV.  The functions have been adapted to use C++.
 *
 * FFmpeg is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * FFmpeg is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with FFmpeg; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
 */

#include "bytereader.h"

extern "C" {
#include "libavutil/intreadwrite.h"
#ifndef AV_RB32
#   define AV_RB32(x)                                \
    (((uint32_t)((const uint8_t*)(x))[0] << 24) |    \
               (((const uint8_t*)(x))[1] << 16) |    \
               (((const uint8_t*)(x))[2] <<  8) |    \
                ((const uint8_t*)(x))[3])
#endif
}

const uint8_t* ByteReader::find_start_code(const uint8_t * p,
                                           const uint8_t * const end,
                                           uint32_t * const start_code,
                                           const bool output_only)
{
    if (output_only)
    {
        if (p + 4 > end)
        {
            *start_code = ~0; // set to an invalid start code
            return end;
        }

        p += 3; // offset for negative indices in while loop
    }
    else
    {
        if (p >= end)
        {
            return end;
        }

        if (*start_code == 0x100)
        {
            *start_code = ~0;
            // set to an invalid start code so 00 00 01 00 01 XX does not
            // falsely detect a start code at offset 7, which overlaps the start
            // code at offset 4
        }
        // read up to the first three bytes in p to enable reading a start code
        // across two (to four) buffers
        for (int i = 0; i < 3; i++)
        {
            *start_code <<= 8;
            *start_code += *p;
            p++;
            if (start_code_is_valid(*start_code) || p == end)
            {
                return p;
            }
        }
        // p is now properly incremented for the negative indices in the while loop
    }

    /* with memory address increasing left to right, we are looking for (in hexadecimal):
     * 00 00 01 XX
     * p points at the address which should have the value of XX
     */
    while (p < end) {
        // UU UU UU
        if      (p[-1]  > 1)
        {
            p += 3;
            // start check over with 3 new bytes
        }
        else if (p[-1] == 0)
        {
            p++;
            // We could be in a start code, so check the next byte.
            // This should be one comparison against 1 since p is unsigned,
            // i.e. (p[-1] == 0) is equivalent to (p[-1] < 1)
        }
        else if (/* UU UU 01 */ p[-2] != 0 ||
                 /* UU 00 01 */ p[-3] != 0)
        {
            p += 3;
        }
        else // 00 00 01
        {
            p++;
            // p now points at the address following the start code value XX
            break;
        }
    }

    if (p > end)
        p = end;
    // read the previous 4 bytes, i.e. bytes {p - 4, p - 3, p - 2, p - 1}
    *start_code = AV_RB32(p - 4);
    return p;
}
