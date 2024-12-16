import React, { useState } from 'react';
import image from '../../constants/image';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const tabs = [
        {
            id: 'tab1',
            label: 'All',
            // content: 'This is the content of Tab 1',
            images: [image.pr5 ,image.pr1, image.pr2 , image.pr3 , image.pr4],
        },
        {
            id: 'tab2',
            label: 'Tab 2',
            content: 'This is the content of Tab 2',
            images: [image.pr3, image.pr4],
        },
        {
            id: 'tab3',
            label: 'Tab 3',
            content: 'This is the content of Tab 3',
            images: [image.code, image.coder, image.cute],
        },
    ];

    return (
        <div className="w-full  p-4">
            {/* Tab Headers */}
            <div className="flex justify-center m-auto max-w-[50vw] pb-4 ">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 py-2 text-center text-sm font-medium transition-colors duration-200 ${
                            activeTab === tab.id
                                ? 'text-[#feb273] border-b-2 border-[#ffd2a9]'
                                : 'text-gray-500 hover:text-[#bdd9d8]'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="  rounded-lg">
                {tabs.map((tab) =>
                    activeTab === tab.id ? (
                        <div key={tab.id} className="text-sm text-gray-700">
                            <p className="mb-4">{tab.content}</p>
                            <div className="flex justify-center flex-wrap gap-4">
                                {tab.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="w-full sm:w-[48%] lg:w-[30%] mt-4"
                                    >
                                        <img
                                            src={image}
                                            alt={`Tab ${tab.id} Image ${index + 1}`}
                                            className="w-full h-[65vh] object-cover rounded-lg shadow-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};

export default Tabs;
