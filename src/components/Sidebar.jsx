import {Button} from "@/components/ui/button";

import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";

export default function Sidebar() {
    return (
        <div className='grid grid-cols-1 justify-evenly mt-20 pt-20'>

            <div className=''>

                <div className='grid grid-cols-1'>
                    <div className='grid grid-cols-1'>
                        <Button className='new-transaction'> + New Transaction</Button>
                    </div>
                    <div className='m-2 grid content-stretch'>
                        <Button>Home</Button>
                    </div>

                    <div className='m-2 grid content-stretch'>
                        <Button>Training Kit</Button>
                    </div>

                    <div className='m-2 grid content-stretch'>
                        <Button>Inbox</Button>
                    </div>

                    <div className='m-2 grid content-stretch'>
                        <Button>Tokens</Button>
                    </div>

                    <div className='m-2 grid content-stretch'>
                        <Button>Customers</Button>
                    </div>
                </div>

            </div>
            <div className='mt-5 ml-2 flex items-center space-x-2'>
                <Switch id="ui-mode"/>
                <Label htmlFor="ui-mode">Dark Mode</Label>
            </div>
        </div>

    );
}