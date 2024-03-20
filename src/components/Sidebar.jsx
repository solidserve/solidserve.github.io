import {Button} from "@/components/ui/button";

import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";

export default function Sidebar() {
    return (
        <div className='grid grid-cols-1 justify-evenly '>
            <div>
                <div className='mt-2 grid grid-cols-1'>
                    <div className=' grid grid-cols-1'>
                        <Button className='new-transaction'> + New Transaction</Button>
                    </div>
                    <div className='mt-3 m-1 grid content-stretch'>
                        <Button>Home</Button>
                    </div>

                    <div className='m-1 grid content-stretch'>
                        <Button className='bg-secondary text-white font-extralight border-10'>Training Kit</Button>
                    </div>

                    <div className='m-1 grid content-stretch'>
                        <Button className='bg-secondary text-white font-extralight border-10'>Inbox</Button>
                    </div>

                    <div className='m-1 grid content-stretch'>
                        <Button className='bg-secondary text-white font-extralight border-10'>Tokens</Button>
                    </div>

                    <div className='m-1 grid content-stretch'>
                        <Button className='bg-secondary text-white font-extralight border-10'>Customers</Button>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-1 mt-2'>
                <p className='justify-center align-middle font-extralight text-gray-300'>Settings</p>
                <Separator/>
            </div>
            <div className='mt-2'>

                <div className='mt-5 ml-2 flex items-center space-x-2'>
                    <Switch id="ui-mode"/>
                    <Label htmlFor="ui-mode">Dark Mode</Label>
                </div>
            </div>

        </div>

    );
}