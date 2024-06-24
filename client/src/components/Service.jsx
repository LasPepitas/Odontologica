import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Service() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px',
                },
            },
        ],
    };

    const services = [
        {
            title: 'Limpieza Dental Profunda',
            description:
                'La limpieza dental profunda es un procedimiento en el que se elimina la placa bacteriana, el sarro y las manchas de los dientes y encías. Ayuda a prevenir enfermedades periodontales y a mantener una sonrisa saludable.',
            imageSrc:
                'https://clinicadentalpalomero.com/wp-content/uploads/2022/10/En-que-consiste-una-limpieza-dental-profunda-y-cuando-hay-que-hacerla.jpg',
        },
        {
            title: 'Blanqueamiento Dental',
            description:
                'El blanqueamiento dental es un procedimiento cosmético que aclara y blanquea los dientes. Puede mejorar la apariencia de los dientes manchados o decolorados debido al tabaco, alimentos y bebidas.',
            imageSrc:
                'https://clinicarosch.com/wp-content/uploads/2021/04/clinicarosch-blog-blanqueamiento-dental-tratamiento-profesional.jpg',
        },
        {
            title: 'Implantes Dentales',
            description:
                'Los implantes dentales son estructuras de titanio que se colocan quirúrgicamente en el hueso de la mandíbula para reemplazar dientes faltantes. Proporcionan una base sólida para coronas, puentes o dentaduras postizas.',
            imageSrc:
                'https://dentalarrasate.com/wp-content/uploads/implantes-dentales-duelen.jpg',
        },
        {
            title: 'Ortodoncia',
            description:
                'La ortodoncia es una especialidad odontológica que se encarga de prevenir, diagnosticar y corregir las malposiciones dentales y los defectos de la mandíbula. Ayuda a mejorar la estética y la funcionalidad de la boca.',
            imageSrc:
                'https://staticnew-prod.topdoctors.com.co/article/12819/image/large/ortodoncia-una-solucion-para-una-sonrisa-saludable-y-alineada-1689121132.jpeg',
        },
        {
            title: 'Endodoncia',
            description:
                'La endodoncia es un tratamiento dental que se realiza para tratar el interior del diente, especialmente cuando la pulpa dental está dañada o infectada. Consiste en la eliminación del tejido pulpar y la limpieza y sellado del conducto radicular.',
            imageSrc:
                'https://www.clinicastoma.com/wp-content/uploads/2014/11/2254-clinica-dental-stoma-alcorcon-y-mostoles-endodoncia-1.jpg',
        },
        {
            title: 'Odontopediatría',
            description:
                'La odontopediatría es la rama de la odontología que se especializa en el cuidado dental de los niños. Se encarga de prevenir, diagnosticar y tratar las enfermedades dentales de los niños desde la infancia hasta la adolescencia.',
            imageSrc:
                'https://clinicadentalsonferriol.com/wp-content/uploads/2022/06/odontopediatria-en-mallorca-1024x726.jpg',
        },
    ];

    return (
        <div className="bg-white pb-10 " id="service">
            <div className="container mx-auto py-12">
                <div className="container mx-auto py-8">
                    <h2 className="text-2xl font-bold mb-12 text-center text-gray-900">
                        Nuestros Servicios
                    </h2>
                    <Slider {...settings}>
                        {services.map((service, index) => (
                            <ServiceItem
                                key={index}
                                title={service.title}
                                description={service.description}
                                imageSrc={service.imageSrc}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

function ServiceItem({ title, description, imageSrc }) {
    return (
        <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}
