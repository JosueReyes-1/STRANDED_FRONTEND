import { Card, Grid, Text, Link,Image } from "@nextui-org/react";

export const CardPlaces = ({name,description,images}) => {
    return (
        <>
            <Card className="shadow-sm" css={{ p: "$6", mw: "90%", margin: "auto", marginTop: "10px", marginBottom: "10px"}}  isHoverable isPressable>
                <Grid.Container>
                    <Grid>
                        <Image
                            alt="nextui logo"
                            src={images[0].img}
                            width={300}
                            height={200}
                            css={{borderRadius:"10px"}}  
                        />
                    </Grid>
                    <Grid>
                        <Card.Header>
                            <Grid.Container>
                                <Grid>
                                    <Grid xs={12}>
                                        <Text h4 css={{ lineHeight: "$xs" }}>
                                            {name}
                                        </Text>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Text css={{ color: "$accents8" }}>nextui.org</Text>
                                    </Grid>
                                </Grid>
                                <Grid css={{ marginLeft: '10px' }}>
                                    starts
                                </Grid>
                            </Grid.Container>
                        </Card.Header>
                        <Card.Body css={{ py: "$2",wordBreak:"break-all" }}>
                            <Text>
                                {description}
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link
                                icon
                                color="primary"
                                target="_blank"
                                href="https://github.com/nextui-org/nextui"
                            >
                                Ver Mas
                            </Link>
                        </Card.Footer>
                    </Grid>

                </Grid.Container>


            </Card>
        </>
    )
}
