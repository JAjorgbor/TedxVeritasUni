'use client'
import type { FC } from 'react';
import Section from '@/components/elements/Section';
import { Card, CardBody, CardHeader, Avatar, Tabs, Tab, } from '@nextui-org/react';
import Speaker from '../cards/Speaker';



const Speakers = ({ }) => {
    return (<>
        <Section sectionName="Speakers" className='py-5 mx-auto w-5/6 space-y-10' >
            <h2 className="font-bold text-xl text-center">Speakers</h2>
            <Tabs className='flex justify-center' color='primary' >
                <Tab key="Keynote" title='Keynote'>
                    <div className="flex flex-wrap gap-6 justify-center">
                        {Array(3).fill(true).map((item, index) => <Speaker key={index} />
                        )}

                    </div>
                </Tab>
                <Tab key="Technology" title='Technology'>
                    <div className="flex flex-wrap gap-6 justify-center">
                        {Array(3).fill(true).map((item, index) => <Speaker key={index} />
                        )}

                    </div>
                </Tab>
                <Tab key="Entrepeneuship" title='Entrepeneuship'>
                    <div className="flex flex-wrap gap-6 justify-center">
                        {Array(4).fill(true).map((item, index) => <Speaker key={index} />
                        )}

                    </div>
                </Tab>
                <Tab key="Talent" title='Talent'>
                    <div className="flex flex-wrap gap-6 justify-center">
                        {Array(3).fill(true).map((item, index) => <Speaker key={index} />
                        )}

                    </div>
                </Tab>
            </Tabs>
        </Section>
    </>);
}
export default Speakers;