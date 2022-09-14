
import { Navbar} from "@nextui-org/react";
import { BrandBar,ProfileBar,SearchBar } from "../components";
    

export const NavBar = () => {
    return (
        <Navbar isBordered variant="sticky">
            <BrandBar />
            <Navbar.Content
                css={{
                    w: "100%",
                    "@xsMax": {
                        w: "100%",
                        jc: "space-around",
                    },
                }}
            >
                <SearchBar />
                <ProfileBar/>
            </Navbar.Content>
        </Navbar>
    )
}
