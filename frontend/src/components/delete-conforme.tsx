import { Button } from "./ui/button";

export default function DeleteConforme(props) {
    return (
        <>
            <div className="absolute top-50 w-lg  z-99 bg-[#00000047] left-[50%] translate-x-[-50%]  p-5 ">
                <div className="flex items-center flex-col">
                    <h3 className="text-xl mb-2">Are you sure ?</h3>
                    <div className="flex gap-3">
                        <Button onClick={props.annule}>Annule</Button>
                        <Button
                            onClick={props.conforme}
                            className="bg-blue-500"
                        >
                            Conforme
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
// translate-x-[-50]  left-[50%]
