import GoBackNavbar from "../components/GoBackNavbar";
import RegisterForm from "../components/RegisterForm";

const Page = () => {
    return (
        <main>
            <GoBackNavbar title={"REGISTRERA"} />
            <RegisterForm />
        </main>
    );
};

export default Page;
