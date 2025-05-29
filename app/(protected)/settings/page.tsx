import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
    const session = await auth();

    return ( 
        <div>
            {JSON.stringify(session)} 
            <form action={ async () => {
                "use server";
                
                await signOut();
            }}>
                <button type="submit">
                    Sign Out
                </button>
            </form>
        </div>
     );
}
// Understanding some logic of callback and in nextAuth v5>
 
export default SettingsPage;