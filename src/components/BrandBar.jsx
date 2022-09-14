import {Navbar,Text} from "@nextui-org/react"

export const BrandBar = () => {
    return (
        <Navbar.Brand css={{ mr: "$4" }}>

            <Text b color="inherit" css={{ mr: "$11" }}>
                Stranded
            </Text>

        </Navbar.Brand>
    )
}
