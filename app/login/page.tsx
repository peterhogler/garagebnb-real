import GoBackNavbar from "../components/GoBackNavbar";
import LoginForm from "../components/LoginForm";

const Page = () => {
    return (
        <main>
            <GoBackNavbar title={"LOGGA IN"} />
            <LoginForm />
        </main>
    );
};

export default Page;
