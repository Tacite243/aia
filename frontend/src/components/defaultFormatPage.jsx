import Header from "./header/head";
import Sider from "./sider";



export default function DefaultFormatPage(){
    return(
        <>
            <Header/>
            <dev className="corps">
                <Sider />
                <div className="principal">
                    <h2>principal</h2>
                </div>
            </dev>
        </>
    )
}