import { LoginForm } from "../../components/login-form";
import logo from "../../assets/fondation-logo.png";
import texturebg from "../../assets/texture.png";

export default function LoginPage() {
    return (
        <div
            style={{
                backgroundImage: `url(${texturebg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // backgroundSize: "cover",
            }}
            className=" flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10"
        >
            <div className="flex w-full max-w-sm flex-col gap-6">
                <a
                    href="#"
                    className="flex items-center gap-2 self-center font-medium"
                >
                    <img src={logo} alt="" className="w-20" />
                </a>
                <LoginForm />
            </div>
        </div>
    );
}
