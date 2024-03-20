import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Sidebar from "@/components/Sidebar";

export default function Main() {
    return (
        <div className="flex flex-col h-svh">
            <ResizablePanelGroup
                direction="horizontal"
                className="max-w-screen-2xl rounded-lg border"
            >
                <ResizablePanel defaultSize={18}>
                    <div className="flex items-center justify-center p-6">
                        <Sidebar />
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={82}>
                    <ResizablePanelGroup direction="vertical">
                        <ResizablePanel defaultSize={15}>
                            <div className="flex h-full items-center justify-center p-6">

                            </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={85}>
                            <div className="flex items-center justify-center p-6">

                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}