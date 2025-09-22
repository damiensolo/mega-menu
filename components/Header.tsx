import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HoverMenu from './HoverMenu';

// --- Icon Definitions ---

// Base wrapper for small nav icons
const NavIconWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={`w-6 h-6 ${className}`}
    >
        {children}
    </svg>
);

// Base wrapper for menu item icons (in hover menu)
const MenuIconWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {children}
        </svg>
    </div>
);

// Base wrapper for large main category icons
const MainIconWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className="relative w-14 h-14 flex items-center justify-center cursor-pointer">
        <div className={`absolute w-12 h-12 rounded-md transform -rotate-6 shadow-lg ${className} opacity-80`}></div>
        <div className={`absolute w-12 h-12 rounded-md transform rotate-6 shadow-lg ${className} opacity-90`}></div>
        <div className={`absolute w-12 h-12 rounded-md flex items-center justify-center shadow-2xl ${className}`}>
             <NavIconWrapper className="text-white">
                {children}
            </NavIconWrapper>
        </div>
    </div>
);


// --- All Icons ---

// Project Management
const ProjectIcon = () => <NavIconWrapper><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></NavIconWrapper>;
const PortfolioIcon = () => <NavIconWrapper><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></NavIconWrapper>;
const PlannerIcon = () => <NavIconWrapper><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="m9 16 2 2 4-4" /></NavIconWrapper>;
const ScheduleIcon = () => <NavIconWrapper><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></NavIconWrapper>;

// Collaboration
const CommunicationIcon = () => <NavIconWrapper><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></NavIconWrapper>;
const DirectoryIcon = () => <NavIconWrapper><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></NavIconWrapper>;
const MyTeamIcon = () => <NavIconWrapper><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></NavIconWrapper>;

// Quality
const PunchlistIcon = () => <NavIconWrapper><line x1="10" y1="6" x2="21" y2="6"></line><line x1="10" y1="12" x2="21" y2="12"></line><line x1="10" y1="18" x2="21" y2="18"></line><polyline points="3 6 4 7 6 5"></polyline><polyline points="3 12 4 13 6 11"></polyline><polyline points="3 18 4 19 6 17"></polyline></NavIconWrapper>;
const ChecklistIcon = () => <NavIconWrapper><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="m9 14 2 2 4-4"/></NavIconWrapper>;

// Finance
const FinanceIcon = () => <NavIconWrapper><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></NavIconWrapper>;
const CostsIcon = () => <NavIconWrapper><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></NavIconWrapper>;
const ContractIcon = () => <NavIconWrapper><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="m16 14-2-2-2 2"/><path d="m10 10 2 2 2-2"/><path d="M14 2v6h6"/></NavIconWrapper>;
const ChangeOrderIcon = () => <NavIconWrapper><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M12 18a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3c0 1.66 1.34 3 3 3Z"/><path d="M12 12v-1"/></NavIconWrapper>;

// Field & Site
const SiteIcon = () => <NavIconWrapper><path d="m12 13.4-4.5 4.5" /><path d="m18 17.1-4.5-4.5" /><path d="m12 3-4.5 4.5" /><path d="m18 7.5-4.5-4.5" /><path d="M21 11.5a8.38 8.38 0 0 1-3.6 7.4l-4.9-4.9" /><path d="M3 11.5a8.38 8.38 0 0 0 3.6 7.4l4.9-4.9" /><path d="M12 21a8.38 8.38 0 0 0 7.4-3.6" /><path d="M12 3a8.38 8.38 0 0 1 7.4 3.6" /></NavIconWrapper>;
const FieldIcon = () => <NavIconWrapper><path d="M20.5 14.5A4.5 4.5 0 0 0 21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6c0 1.2.4 2.4 1.2 3.2L7 18.5V21h10v-2.5l2.8-2.8H21z"/><path d="M7 15h10"/></NavIconWrapper>;
const EquipmentIcon = () => <NavIconWrapper><path d="M5 18H3c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-2"/><path d="M17 18h-2v-4.3c0-.6.4-1.2 1-1.4l1-.4c.6-.2 1.2.2 1.4 1l.6 1.7"/><path d="M17 18H9"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></NavIconWrapper>;
const SafetyIcon = () => <NavIconWrapper><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></NavIconWrapper>;
const AnalyticsIcon = () => <NavIconWrapper><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></NavIconWrapper>;
const FeedsIcon = () => <NavIconWrapper><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></NavIconWrapper>;

// Documentation
const DocumentIcon = () => <NavIconWrapper><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></NavIconWrapper>;
const PlansIcon = () => <NavIconWrapper><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M18 3v5h5"/><path d="M8 18h8"/><path d="M8 14h8"/><path d="M8 10h3"/></NavIconWrapper>;
const RFIIcon = () => <NavIconWrapper><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><circle cx="12" cy="14" r="1"/><path d="M12 10a2 2 0 0 1-2-2c0-1.5.5-3 3-3s3 1.5 3 3"/></NavIconWrapper>;
const SubmittalsIcon = () => <NavIconWrapper><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></NavIconWrapper>;
const SpecbookIcon = () => <NavIconWrapper><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></NavIconWrapper>;

// General Icons
const ReportsIcon = () => <NavIconWrapper><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></NavIconWrapper>;
const SearchIcon = () => <NavIconWrapper><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></NavIconWrapper>;
const ChatIcon = () => <NavIconWrapper><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="15" y1="10" x2="15.01" y2="10"></line><line x1="11" y1="10" x2="11.01" y2="10"></line><line x1="7" y1="10" x2="7.01" y2="10"></line></NavIconWrapper>;
const HelpIcon = () => <NavIconWrapper><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></NavIconWrapper>;
const BellIcon = () => <NavIconWrapper><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></NavIconWrapper>;


// --- Main Category Icons with Titles ---
const ProjectManagementMainIcon = () => (
    <div className="relative w-16 h-16 flex flex-col items-center justify-center cursor-pointer">
        <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute w-12 h-12 rounded-md transform -rotate-6 shadow-lg bg-orange-500 opacity-80"></div>
            <div className="absolute w-12 h-12 rounded-md transform rotate-6 shadow-lg bg-orange-500 opacity-90"></div>
            <div className="absolute w-12 h-12 rounded-md flex items-center justify-center shadow-2xl bg-orange-500">
                 <NavIconWrapper className="text-white">
                    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
                </NavIconWrapper>
            </div>
        </div>
        <span className="mt-2 text-xs font-semibold text-white leading-none">PM</span>
    </div>
);
const CollaborationMainIcon = () => (
    <div className="relative w-16 h-16 flex flex-col items-center justify-center cursor-pointer">
        <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute w-12 h-12 rounded-md transform -rotate-6 shadow-lg bg-sky-500 opacity-80"></div>
            <div className="absolute w-12 h-12 rounded-md transform rotate-6 shadow-lg bg-sky-500 opacity-90"></div>
            <div className="absolute w-12 h-12 rounded-md flex items-center justify-center shadow-2xl bg-sky-500">
                 <NavIconWrapper className="text-white">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </NavIconWrapper>
            </div>
        </div>
        <span className="mt-2 text-xs font-semibold text-white leading-none">Collab</span>
    </div>
);
const QualityMainIcon = () => (
    <div className="relative w-16 h-16 flex flex-col items-center justify-center cursor-pointer">
        <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute w-12 h-12 rounded-md transform -rotate-6 shadow-lg bg-rose-500 opacity-80"></div>
            <div className="absolute w-12 h-12 rounded-md transform rotate-6 shadow-lg bg-rose-500 opacity-90"></div>
            <div className="absolute w-12 h-12 rounded-md flex items-center justify-center shadow-2xl bg-rose-500">
                 <NavIconWrapper className="text-white">
                    <polyline points="3 6 4 7 6 5"></polyline><polyline points="3 12 4 13 6 11"></polyline><polyline points="3 18 4 19 6 17"></polyline><line x1="10" y1="6" x2="21" y2="6"></line><line x1="10" y1="12" x2="21" y2="12"></line><line x1="10" y1="18" x2="21" y2="18"></line>
                </NavIconWrapper>
            </div>
        </div>
        <span className="mt-2 text-xs font-semibold text-white leading-none">Quality</span>
    </div>
);
const FinanceMainIcon = () => (
    <div className="relative w-16 h-16 flex flex-col items-center justify-center cursor-pointer">
        <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute w-12 h-12 rounded-md transform -rotate-6 shadow-lg bg-green-500 opacity-80"></div>
            <div className="absolute w-12 h-12 rounded-md transform rotate-6 shadow-lg bg-green-500 opacity-90"></div>
            <div className="absolute w-12 h-12 rounded-md flex items-center justify-center shadow-2xl bg-green-500">
                 <NavIconWrapper className="text-white">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </NavIconWrapper>
            </div>
        </div>
        <span className="mt-2 text-xs font-semibold text-white leading-none">Finance</span>
    </div>
);
const FieldOpsMainIcon = () => (
    <div className="relative w-16 h-16 flex flex-col items-center justify-center cursor-pointer">
        <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute w-12 h-12 rounded-md transform -rotate-6 shadow-lg bg-amber-500 opacity-80"></div>
            <div className="absolute w-12 h-12 rounded-md transform rotate-6 shadow-lg bg-amber-500 opacity-90"></div>
            <div className="absolute w-12 h-12 rounded-md flex items-center justify-center shadow-2xl bg-amber-500">
                 <NavIconWrapper className="text-white">
                    <path d="M20.5 14.5A4.5 4.5 0 0 0 21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6c0 1.2.4 2.4 1.2 3.2L7 18.5V21h10v-2.5l2.8-2.8H21z"/><path d="M7 15h10"/>
                </NavIconWrapper>
            </div>
        </div>
        <span className="mt-2 text-xs font-semibold text-white leading-none">Field</span>
    </div>
);
const DocumentationMainIcon = () => (
    <div className="relative w-16 h-16 flex flex-col items-center justify-center cursor-pointer">
        <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute w-12 h-12 rounded-md transform -rotate-6 shadow-lg bg-cyan-500 opacity-80"></div>
            <div className="absolute w-12 h-12 rounded-md transform rotate-6 shadow-lg bg-cyan-500 opacity-90"></div>
            <div className="absolute w-12 h-12 rounded-md flex items-center justify-center shadow-2xl bg-cyan-500">
                 <NavIconWrapper className="text-white">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>
                </NavIconWrapper>
            </div>
        </div>
        <span className="mt-2 text-xs font-semibold text-white leading-none">Docs</span>
    </div>
);

// --- Navigation Data Structure ---

// Split navigation data to correctly type the active category and avoid type errors.
// Standard categories have a main icon and structured items, and can be set as the active category.
const standardCategories = {
    projectManagement: {
        key: 'projectManagement', title: 'Project Management', mainIcon: <ProjectManagementMainIcon/>,
        items: [
            { key: 'project', label: 'Project', description: 'Core project management', icon: <MenuIconWrapper className="bg-orange-100 text-orange-600"><ProjectIcon/></MenuIconWrapper>, navIcon: <ProjectIcon/> },
            { key: 'portfolio', label: 'Portfolio', description: 'Oversee multiple projects', icon: <MenuIconWrapper className="bg-gray-100 text-gray-600"><PortfolioIcon/></MenuIconWrapper>, navIcon: <PortfolioIcon/> },
            { key: 'planner', label: 'Planner', description: 'Task and milestone planning', icon: <MenuIconWrapper className="bg-blue-100 text-blue-600"><PlannerIcon/></MenuIconWrapper>, navIcon: <PlannerIcon/> },
            { key: 'schedule', label: 'Schedule', description: 'Detailed project timelines', icon: <MenuIconWrapper className="bg-purple-100 text-purple-600"><ScheduleIcon/></MenuIconWrapper>, navIcon: <ScheduleIcon/> },
        ]
    },
    collaboration: {
        key: 'collaboration', title: 'Collaboration', mainIcon: <CollaborationMainIcon/>,
        items: [
            { key: 'communication', label: 'Communication', description: 'Team messaging and updates', icon: <MenuIconWrapper className="bg-sky-100 text-sky-600"><CommunicationIcon/></MenuIconWrapper>, navIcon: <CommunicationIcon/> },
            { key: 'directory', label: 'Directory', description: 'Contact info for stakeholders', icon: <MenuIconWrapper className="bg-sky-100 text-sky-600"><DirectoryIcon/></MenuIconWrapper>, navIcon: <DirectoryIcon/> },
            { key: 'myTeam', label: 'My Team', description: 'Manage your direct team', icon: <MenuIconWrapper className="bg-sky-100 text-sky-600"><MyTeamIcon/></MenuIconWrapper>, navIcon: <MyTeamIcon/> },
        ]
    },
    quality: {
        key: 'quality', title: 'Quality', mainIcon: <QualityMainIcon/>,
        items: [
            { key: 'punchlist', label: 'Punchlist', description: 'Track and resolve issues', icon: <MenuIconWrapper className="bg-rose-100 text-rose-600"><PunchlistIcon/></MenuIconWrapper>, navIcon: <PunchlistIcon/> },
            { key: 'checklist', label: 'Checklist', description: 'Ensure standards are met', icon: <MenuIconWrapper className="bg-rose-100 text-rose-600"><ChecklistIcon/></MenuIconWrapper>, navIcon: <ChecklistIcon/> },
        ]
    },
    finance: {
        key: 'finance', title: 'Finance & Cost Control', mainIcon: <FinanceMainIcon/>,
        items: [
            { key: 'finance', label: 'Finance', description: 'Main financial dashboard', icon: <MenuIconWrapper className="bg-green-100 text-green-600"><FinanceIcon/></MenuIconWrapper>, navIcon: <FinanceIcon/> },
            { key: 'costs', label: 'Costs', description: 'Track all project expenses', icon: <MenuIconWrapper className="bg-green-100 text-green-600"><CostsIcon/></MenuIconWrapper>, navIcon: <CostsIcon/> },
            { key: 'contract', label: 'Contract', description: 'Manage contracts and vendors', icon: <MenuIconWrapper className="bg-green-100 text-green-600"><ContractIcon/></MenuIconWrapper>, navIcon: <ContractIcon/> },
            { key: 'changeOrder', label: 'Change Order', description: 'Handle contract modifications', icon: <MenuIconWrapper className="bg-teal-100 text-teal-600"><ChangeOrderIcon/></MenuIconWrapper>, navIcon: <ChangeOrderIcon/> },
        ]
    },
    fieldOps: {
        key: 'fieldOps', title: 'Field & Site Operations', mainIcon: <FieldOpsMainIcon/>,
        items: [
            { key: 'site', label: 'Site', description: 'Daily site management tools', icon: <MenuIconWrapper className="bg-orange-100 text-orange-600"><SiteIcon/></MenuIconWrapper>, navIcon: <SiteIcon/> },
            { key: 'field', label: 'Field', description: 'Reports and data collection', icon: <MenuIconWrapper className="bg-amber-100 text-amber-600"><FieldIcon/></MenuIconWrapper>, navIcon: <FieldIcon/> },
            { key: 'equipment', label: 'Equipment', description: 'Track and manage equipment', icon: <MenuIconWrapper className="bg-amber-100 text-amber-600"><EquipmentIcon/></MenuIconWrapper>, navIcon: <EquipmentIcon/> },
            { key: 'safety', label: 'Safety', description: 'Compliance and reports', icon: <MenuIconWrapper className="bg-amber-100 text-amber-600"><SafetyIcon/></MenuIconWrapper>, navIcon: <SafetyIcon/> },
            { key: 'analytics', label: 'Analytics', description: 'Field data and insights', icon: <MenuIconWrapper className="bg-indigo-100 text-indigo-600"><AnalyticsIcon/></MenuIconWrapper>, navIcon: <AnalyticsIcon/> },
            { key: 'feeds', label: 'Feeds', description: 'Real-time project updates', icon: <MenuIconWrapper className="bg-yellow-100 text-yellow-600"><FeedsIcon/></MenuIconWrapper>, navIcon: <FeedsIcon/> },
        ]
    },
    documentation: {
        key: 'documentation', title: 'Documentation', mainIcon: <DocumentationMainIcon/>,
        items: [
            { key: 'document', label: 'Document', description: 'Central document repository', icon: <MenuIconWrapper className="bg-cyan-100 text-cyan-600"><DocumentIcon/></MenuIconWrapper>, navIcon: <DocumentIcon/> },
            { key: 'plans', label: 'Plans', description: 'View and manage blueprints', icon: <MenuIconWrapper className="bg-blue-100 text-blue-600"><PlansIcon/></MenuIconWrapper>, navIcon: <PlansIcon/> },
            { key: 'rfi', label: 'RFI', description: 'Manage requests for information', icon: <MenuIconWrapper className="bg-cyan-100 text-cyan-600"><RFIIcon/></MenuIconWrapper>, navIcon: <RFIIcon/> },
            { key: 'submittals', label: 'Submittals', description: 'Track and approve submittals', icon: <MenuIconWrapper className="bg-cyan-100 text-cyan-600"><SubmittalsIcon/></MenuIconWrapper>, navIcon: <SubmittalsIcon/> },
            { key: 'specbook', label: 'Specbook', description: 'Review project specifications', icon: <MenuIconWrapper className="bg-cyan-100 text-cyan-600"><SpecbookIcon/></MenuIconWrapper>, navIcon: <SpecbookIcon/> },
        ]
    },
};

const navigationData = {
    ...standardCategories,
    more: {
        key: 'more' as const, 
        title: 'More',
        items: ['Reports', 'Configure'],
    }
};

const menuLayout = {
    column1: ['projectManagement', 'collaboration', 'quality'],
    column2: ['finance', 'fieldOps'],
    column3: ['documentation', 'more'],
};


interface NavItemProps {
    icon: React.ReactNode;
    label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => (
    <a href="#" onClick={(e) => e.preventDefault()} className="flex flex-col items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200">
        {icon}
        <span className="text-xs font-medium">{label}</span>
    </a>
);

const projectDetails = [
    "Big Mall",
    "4900 Moorpark Ave #326, San Jose, CA 95127, USA",
    "Owner - Build Enterprises",
    "GC - A to Z construction",
    "PM - Max Anderson",
    "+1 56535 - 7878"
];

const Header: React.FC = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    // State is typed to only allow keys of standard categories, ensuring type safety.
    const [activeCategoryKey, setActiveCategoryKey] = useState<keyof typeof standardCategories>('projectManagement');

    const handleSelectCategory = (key: string) => {
        // Check if the selected key is a valid standard category before updating state.
        if (key in standardCategories) {
            setActiveCategoryKey(key as keyof typeof standardCategories);
        }
        setMenuVisible(false);
    };

    // Get the active category from the type-safe standardCategories object.
    const activeCategory = standardCategories[activeCategoryKey];
    const navItems = activeCategory.items;

    return (
        <header className="bg-[#1e1e1e] text-white font-sans shadow-lg">
            <div className="px-4 py-2 flex flex-col gap-y-0">
                {/* Top Row for main navigation and actions */}
                <div className="flex justify-between items-center">
                    {/* Left & Center Nav Items */}
                    <div className="flex items-center gap-x-6">
                        <div 
                            className="relative"
                            onMouseEnter={() => setMenuVisible(true)}
                            onMouseLeave={() => setMenuVisible(false)}
                            style={{ transform: 'translateY(11px)' }}
                        >
                            {activeCategory.mainIcon}
                            <AnimatePresence>
                                {isMenuVisible && 
                                    <HoverMenu 
                                        navigationData={navigationData}
                                        menuLayout={menuLayout}
                                        onSelectCategory={handleSelectCategory}
                                    />
                                }
                            </AnimatePresence>
                        </div>
                        <nav>
                            <ul className="flex items-center gap-x-6">
                                {navItems.map((item) => (
                                    <li key={item.key}>
                                        <NavItem icon={item.navIcon} label={item.label} />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Right Action Icons */}
                    <div className="flex items-center gap-x-4">
                        <button className="text-gray-300 hover:text-white transition-colors duration-200" aria-label="Search"><SearchIcon /></button>
                        <button className="text-gray-300 hover:text-white transition-colors duration-200" aria-label="Chat"><ChatIcon /></button>
                        <button className="text-gray-300 hover:text-white transition-colors duration-200" aria-label="Help"><HelpIcon /></button>
                        <button className="text-gray-300 hover:text-white transition-colors duration-200" aria-label="Notifications"><BellIcon /></button>
                        <div className="w-10 h-10 rounded-full bg-black border border-gray-600 flex items-center justify-center">
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Bottom Row for Project Details */}
                <div className="text-xs text-gray-400 flex items-center gap-x-3" style={{ paddingLeft: '89px' }}>
                    {projectDetails.map((detail, index) => (
                        <React.Fragment key={index}>
                            <span>{detail}</span>
                            {index < projectDetails.length - 1 && <span className="text-gray-500">|</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;