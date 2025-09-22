
import React from 'react';
import { motion } from 'framer-motion';

// --- Type Definitions ---
interface PrimaryMenuItemData {
    key: string;
    label: string;
    description: string;
    icon: React.ReactNode;
    navIcon: React.ReactNode;
}

interface MoreItem {
    key: 'more';
    title: 'More';
    items: string[];
    // FIX: Added `mainIcon?: never` to make `CategoryData` a discriminated union.
    // This fixes a type inference issue with the `navigationData` object in Header.tsx.
    mainIcon?: never;
}
interface StandardCategoryData {
    key: string;
    title: string;
    mainIcon: JSX.Element; // Requires this property to exist on StandardCategoryData
    items: PrimaryMenuItemData[];
}

type CategoryData = StandardCategoryData | MoreItem;

interface HoverMenuProps {
    navigationData: { [key: string]: CategoryData };
    menuLayout: { [key: string]: string[] };
    onSelectCategory: (key: string) => void;
}

interface PrimaryMenuItemProps {
    icon: React.ReactNode;
    label: string;
    description: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// --- Component for Primary Menu Items ---
const PrimaryMenuItem: React.FC<PrimaryMenuItemProps> = ({ icon, label, description, onClick }) => (
    <a href="#" onClick={onClick} className="flex items-start gap-4 p-2 -m-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group">
        {icon}
        <div>
            <h5 className="font-semibold text-gray-800 text-sm group-hover:text-blue-600">{label}</h5>
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
    </a>
);

// --- Component for "More" section items ---
const MoreMenuItem: React.FC<{ label: string }> = ({ label }) => (
    <a href="#" onClick={(e) => e.preventDefault()} className="block text-sm font-medium text-gray-600 hover:text-blue-600 py-1">{label}</a>
);


// --- Helper to render a column ---
const renderColumn = (columnKeys: string[], navigationData: HoverMenuProps['navigationData'], onSelectCategory: HoverMenuProps['onSelectCategory']) => {
  return columnKeys.map(key => {
    const category = navigationData[key];
    if (!category) return null;

    return (
        <div key={category.key} className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">{category.title}</h4>
            {/* A robust type guard: if 'mainIcon' property exists, it's a StandardCategoryData, otherwise it's a MoreItem */}
            {'mainIcon' in category
                ? category.items.map(item => (
                    <PrimaryMenuItem 
                        key={item.key} 
                        icon={item.icon} 
                        label={item.label} 
                        description={item.description}
                        onClick={(e) => {
                            e.preventDefault();
                            onSelectCategory(category.key);
                        }}
                    />
                  ))
                : category.items.map(item => <MoreMenuItem key={item} label={item} />)
            }
        </div>
    );
  });
};


// --- Main Component Definition ---
const HoverMenu: React.FC<HoverMenuProps> = ({ navigationData, menuLayout, onSelectCategory }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-0 mt-0.5 bg-white rounded-xl shadow-2xl p-6 md:p-8 z-50 origin-top-left"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 text-black divide-y md:divide-y-0 md:divide-x divide-gray-100 w-max min-w-[800px]">
                <div className="space-y-8 pb-6 md:pb-0 md:pr-8">
                    {renderColumn(menuLayout.column1, navigationData, onSelectCategory)}
                </div>
                <div className="space-y-8 py-6 md:py-0 md:px-8">
                    {renderColumn(menuLayout.column2, navigationData, onSelectCategory)}
                </div>
                <div className="space-y-8 pt-6 md:pt-0 md:pl-8">
                    {renderColumn(menuLayout.column3, navigationData, onSelectCategory)}
                </div>
            </div>
        </motion.div>
    );
};

export default HoverMenu;