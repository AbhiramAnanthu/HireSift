import HeroSection from "./hero"
import NavigationBar from "./navbar"
import GetStartedSection from "./getstarted"
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';

function Home(){
    return (
        <>
                <div>
                    <NavigationBar />
                    <main>
                        <HeroSection />
                        <GetStartedSection />
                    </main>
                </div>
        </>
    )
}
export default Home