import { Grid,Button } from "@nextui-org/react";
import { ButtonCategory } from "../components";

import { faChampagneGlasses, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';



export const Category = () => {
    return (
        <>

            <Grid.Container gap={2} css={{ jc: "center" }} >
                <OwlCarousel margin={10} autoWidth className='owl-category'>
                    <ButtonCategory category={'Playa'} icon={faUmbrellaBeach} />
                    <ButtonCategory category={'Bar'} icon={faChampagneGlasses} />
                    <ButtonCategory category={'Playa'} icon={faUmbrellaBeach} />
                    <ButtonCategory category={'Bar'} icon={faChampagneGlasses} />
                    <ButtonCategory category={'Playa'} icon={faUmbrellaBeach} />
                    <ButtonCategory category={'Bar'} icon={faChampagneGlasses} />
                    <ButtonCategory category={'Playa'} icon={faUmbrellaBeach} />
                    <ButtonCategory category={'Bar'} icon={faChampagneGlasses} />
                    <ButtonCategory category={'Playa'} icon={faUmbrellaBeach} />
                    <ButtonCategory category={'Bar'} icon={faChampagneGlasses} />
                    <ButtonCategory category={'Playa'} icon={faUmbrellaBeach} />
                    <ButtonCategory category={'Bar'} icon={faChampagneGlasses} />
                    <ButtonCategory category={'Playa'} icon={faUmbrellaBeach} />
                    <ButtonCategory category={'Bar'} icon={faChampagneGlasses} />
                </OwlCarousel>

            </Grid.Container>


        </>
    )
}
