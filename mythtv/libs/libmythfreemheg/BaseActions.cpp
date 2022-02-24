/* BaseActions.cpp

   Copyright (C)  David C. J. Matthews 2004, 2008  dm at prolingua.co.uk

   This program is free software; you can redistribute it and/or
   modify it under the terms of the GNU General Public License
   as published by the Free Software Foundation; either version 2
   of the License, or (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with this program; if not, write to the Free Software
   Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA
   Or, point your browser to http://www.gnu.org/copyleft/gpl.html

*/

#include <cstdio>

#include "BaseActions.h"
#include "BaseClasses.h"
#include "ParseNode.h"
#include "Ingredients.h"
#include "Engine.h"


void MHElemAction::Initialise(MHParseNode *p, MHEngine *engine)
{
    m_target.Initialise(p->GetArgN(0), engine);
}

// Print the action name and the target.
void MHElemAction::PrintMe(FILE *fd, int nTabs) const
{
    PrintTabs(fd, nTabs);
    fprintf(fd, "%s (", m_actionName);
    m_target.PrintMe(fd, nTabs + 1);
    PrintArgs(fd, nTabs + 1); // Any other arguments must be handled by the subclass.
    fprintf(fd, ")\n");
}

MHRoot *MHElemAction::Target(MHEngine *engine)
{
    MHObjectRef target;
    m_target.GetValue(target, engine);
    return engine->FindObject(target);
}

void MHActionInt::Initialise(MHParseNode *p, MHEngine *engine)
{
    MHElemAction::Initialise(p, engine);
    m_argument.Initialise(p->GetArgN(1), engine);
}


void MHActionInt::Perform(MHEngine *engine)
{
    CallAction(engine, Target(engine), m_argument.GetValue(engine));
}

void MHActionIntInt::Initialise(MHParseNode *p, MHEngine *engine)
{
    MHElemAction::Initialise(p, engine);
    m_argument1.Initialise(p->GetArgN(1), engine);
    m_argument2.Initialise(p->GetArgN(2), engine);
}

void MHActionIntInt::Perform(MHEngine *engine)
{
    CallAction(engine, Target(engine), m_argument1.GetValue(engine), m_argument2.GetValue(engine));
}

void MHActionObjectRef::Initialise(MHParseNode *p, MHEngine *engine)
{
    MHElemAction::Initialise(p, engine);
    m_resultVar.Initialise(p->GetArgN(1), engine);
}

void MHActionObjectRef2::Initialise(MHParseNode *p, MHEngine *engine)
{
    MHElemAction::Initialise(p, engine);
    m_resultVar1.Initialise(p->GetArgN(1), engine);
    m_resultVar2.Initialise(p->GetArgN(2), engine);
}

void MHActionInt3::Initialise(MHParseNode *p, MHEngine *engine)
{
    MHElemAction::Initialise(p, engine);
    m_argument1.Initialise(p->GetArgN(1), engine);
    m_argument2.Initialise(p->GetArgN(2), engine);
    m_argument3.Initialise(p->GetArgN(3), engine);
}

void MHActionInt3::PrintArgs(FILE *fd, int /*nTabs*/) const
{
    m_argument1.PrintMe(fd, 0);
    m_argument2.PrintMe(fd, 0);
    m_argument3.PrintMe(fd, 0);
}

void MHActionInt3::Perform(MHEngine *engine)
{
    CallAction(engine, Target(engine), m_argument1.GetValue(engine), m_argument2.GetValue(engine), m_argument3.GetValue(engine));
}

void MHActionInt4::Initialise(MHParseNode *p, MHEngine *engine)
{
    MHElemAction::Initialise(p, engine);
    m_argument1.Initialise(p->GetArgN(1), engine);
    m_argument2.Initialise(p->GetArgN(2), engine);
    m_argument3.Initialise(p->GetArgN(3), engine);
    m_argument4.Initialise(p->GetArgN(4), engine);
}

void MHActionInt4::PrintArgs(FILE *fd, int /*nTabs*/) const
{
    m_argument1.PrintMe(fd, 0);
    m_argument2.PrintMe(fd, 0);
    m_argument3.PrintMe(fd, 0);
    m_argument4.PrintMe(fd, 0);
}

void MHActionInt4::Perform(MHEngine *engine)
{
    CallAction(engine, Target(engine), m_argument1.GetValue(engine), m_argument2.GetValue(engine), m_argument3.GetValue(engine), m_argument4.GetValue(engine));
}

void MHActionInt6::Initialise(MHParseNode *p, MHEngine *engine)
{
    MHElemAction::Initialise(p, engine);
    m_argument1.Initialise(p->GetArgN(1), engine);
    m_argument2.Initialise(p->GetArgN(2), engine);
    m_argument3.Initialise(p->GetArgN(3), engine);
    m_argument4.Initialise(p->GetArgN(4), engine);
    m_argument5.Initialise(p->GetArgN(5), engine);
    m_argument6.Initialise(p->GetArgN(6), engine);
}

void MHActionInt6::PrintArgs(FILE *fd, int /*nTabs*/) const
{
    m_argument1.PrintMe(fd, 0);
    m_argument2.PrintMe(fd, 0);
    m_argument3.PrintMe(fd, 0);
    m_argument4.PrintMe(fd, 0);
    m_argument5.PrintMe(fd, 0);
    m_argument6.PrintMe(fd, 0);
}

void MHActionInt6::Perform(MHEngine *engine)
{
    CallAction(engine, Target(engine), m_argument1.GetValue(engine), m_argument2.GetValue(engine), m_argument3.GetValue(engine),
               m_argument4.GetValue(engine), m_argument5.GetValue(engine), m_argument6.GetValue(engine));
}


void MHActionGenericObjectRef::Initialise(MHParseNode *p, MHEngine *engine)
{
    MHElemAction::Initialise(p, engine); // Target
    m_refObject.Initialise(p->GetArgN(1), engine);
}

void MHActionGenericObjectRef::Perform(MHEngine *engine)
{
    MHObjectRef reference;
    m_refObject.GetValue(reference, engine);
    CallAction(engine, Target(engine), engine->FindObject(reference));
}

void MHActionObjectRef::Perform(MHEngine *engine)
{
    CallAction(engine, Target(engine), engine->FindObject(m_resultVar));
}


void MHActionObjectRef2::Perform(MHEngine *engine)
{
    CallAction(engine, Target(engine), engine->FindObject(m_resultVar1), engine->FindObject(m_resultVar2));
}

void MHActionBool::Initialise(MHParseNode *p, MHEngine *engine)
{
    MHElemAction::Initialise(p, engine);
    m_argument.Initialise(p->GetArgN(1), engine);
}


void MHActionBool::Perform(MHEngine *engine)
{
    CallAction(engine, Target(engine), m_argument.GetValue(engine));
}
