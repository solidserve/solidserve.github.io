import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";
import {Input} from "@/components/ui/input";

export default function Sidebar() {
    return (
        <div className='grid grid-cols-1 justify-evenly '>
            <div>
                <div className='mt-2 grid grid-cols-1'>
                    <div className=' grid grid-cols-1'>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className='new-transaction'>+ New Transaction</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>New Transaction</DialogTitle>
                                    <DialogDescription>
                                        Make a new transaction by entering the Token ID and Service ID
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Token ID
                                        </Label>
                                        <Input id="name" value="100" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">
                                            Service ID
                                        </Label>
                                        <Input id="username" value="20" className="col-span-3" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit" className='new-transaction'>Continue</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
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