import { ServiceCards } from "./ServiceCards";

export const Services = () => {
    return (
        <section>
            <h3 className="text-center py-1 text-dark">
                Services I offer 
            </h3>
            <p className="py-2 lead">
                Since the beginning of my journey as a freelance designer and
                developer, I've done remote work for
                <span className="text-info"> agencies </span>
                consulted for <span className="text-info">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
            </p>
            <p className="py-2 lead">
                I offer from a wide range of services, including brand design,
                programming and teaching.
            </p>
            <ServiceCards/>
        </section>
    )
}