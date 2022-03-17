import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemList from "./ItemList";

const miOnAdd = () => {};
let asd;

const ItemListContainer = (props) => {
	const items = [
		{
			id: 1,
			categoria: "platos-principales",
			nombre: "MASALA DOSA",
			descripcion:
				"Es una crepa crujiente de masa de arroz que envuelve una mezcla de puré de papas y luego se sumerge en chutney de coco, pepinillos, salsas de jitomate con lentejas y otros condimentos. Es un desayuno fantástico que te mantendrá con energía hasta que vengas por otro en el almuerzo.",
			img: "https://cnnespanol.cnn.com/wp-content/uploads/2017/10/cnn-comida-2.jpg",
			precio: 750,
		},
		{
			id: 2,
			categoria: "platos-principales",
			nombre: "PAELLA DE MARISCOS",
			descripcion:
				"Las olas del mar te acarician los pies, una brisa tibia hace ondear el mantel que cae sobre tus piernas y tienes una paellera humeante ante ti. Camarones, langosta, mejillones y sepias combinadas con arroz blanco y especias, aceite y sal en este platillo valenciano que te pone de inmediato en modo vacacional. Si la estás probando en España, es porque ya estás de vacaciones.",
			img: "https://cnnespanol.cnn.com/wp-content/uploads/2017/10/cnn-comida-4.jpg",
			precio: 1050,
		},
		{
			id: 3,
			categoria: "platos-principales",
			nombre: "SOM TAM",
			descripcion:
				"Para preparar la ensalada más famosa de Tailandia, muele ajos y chiles en un mortero. Agrega jugo de tamarindo, salsa de pescado, cacahuates, camarones secos, jitomate, jugo de limón, piloncillo, ejotes y un puño de papaya verde rallada. Acompaña con un poco de arroz pegajoso. Hay variaciones con cangrejo (som tam boo) y con salsa de pescado fermentada (som tam plah lah), pero ninguna se compara con el sabor y la belleza sencilla de la original.",
			img: "https://cnnespanol.cnn.com/wp-content/uploads/2017/10/cnn-comida-5.jpg",
			precio: 530,
		},
		{
			id: 4,
			categoria: "platos-principales",
			nombre: "ARROZ CON POLLO",
			descripcion:
				"Este platillo, al que suele llamarse 'platillo nacional' de Singapur, consiste en pollo al vapor o hervido acompañado de arroz aceitoso fragante y pepinos rebanados. Entre las variantes hay una con pollo rostizado o con pollo en salsa de soya. Sin importar cómo lo preparen, es uno de los mejores platillos de Singapur. Las salsas con las que lo acompañan (salsa de soya oscura premium, chile con ajo y jengibre machacado) le dan un toque especial que garantiza que si no estás en Singapur probándolo, estarás pensando en él.",
			img: "https://cnnespanol.cnn.com/wp-content/uploads/2017/10/cnn-comida-6.jpg",
			precio: 920,
		},
		{
			id: 5,
			categoria: "platos-principales",
			nombre: "POUTINE",
			descripcion:
				"Papas fritas ahogadas en cuajada de queso y caldillo marrón. Suena un poco desagradable, se ve aún peor, pero llena la boca de una mezcla tersa de queso, salsa y papas fritas que te hará pelear hasta por el último bocado. Nuestros amigos canadienses insisten en que es mejor si lo comes a las 3 de la mañana, después de 'varias' cervezas.",
			img: "https://cnnespanol.cnn.com/wp-content/uploads/2017/10/cnn-comida-7.jpg",
			precio: 675,
		},
		{
			id: 6,
			categoria: "platos-principales",
			nombre: "TACOS",
			descripcion:
				"Una tortilla fresca, hecha a mano, rellena con trozos pequeños de carne a la parrilla marinada con aceite y sal de mar, cubierto con guacamole, salsa, cebollas, cilantro o cualquier cosa que quieras. Son perfectos para el desayuno, para el almuerzo o la cena. Esta es la razón por la que ningún visitante se va de México pesando menos que cuando llegó.",
			img: "https://cnnespanol.cnn.com/wp-content/uploads/2017/10/cnn-comida-8.jpg",
			precio: 1200,
		},
		{
			id: 7,
			categoria: "entradas",
			nombre: "TOFU APESTOSO",
			descripcion:
				"Nada te prepara en realidad para el hedor de uno de los platillos más extraños de la Tierra. Al igual que el durian, el tofu apestoso es uno de los alimentos más icónicos del sureste asiático. El olor del tofu en fermentación es tan abrumador que muchas personas no logran borrarlo de la memoria durante meses. ¿Vale la pena hacer tal esfuerzo por un sabor legendariamente divino? Definitivamente.",
			img: "https://cnnespanol.cnn.com/wp-content/uploads/2017/10/cnn-comida-10.jpg",
			precio: 870,
		},
		{
			id: 8,
			categoria: "postres",
			nombre: "PAN FRANCÉS",
			descripcion:
				"A diferencia del platillo característico y más mesurado del brunch dominical, el pan francés estilo Hong Kong es como un abrazo frito. Tomas un par de rebanadas de pan tostado y las cubres de crema de cacahuate o de mermelada de kaya, las rebosas con huevo, las fríes en mantequilla y las sirves con más mantequilla y mucho jarabe. Es uno de los mejores platillos de Hong Kong y es mejor disfrutarlo antes de que te hagas una prueba de colesterol.",
			img: "https://cnnespanol.cnn.com/wp-content/uploads/2017/10/cnn-comida-13.jpg",
			precio: 990,
		},
		{
			id: 9,
			categoria: "platos-principales",
			nombre: "POLLO A LA PARMESANA",
			descripcion:
				"Queso parmesano y mozzarella derretido y una salsa de tomate con ajo y chiles sobre un filete de pollo. Los parroquianos de las tabernas australianas afirman que este platillo, ostensiblemente italiano, ya es suyo. Como lo preparan tan bien, no tiene caso discutir.",
			img: "https://cnnespanol.cnn.com/wp-content/uploads/2017/10/cnn-comida-14.jpg",
			precio: 750,
		},
		{
			id: 10,
			categoria: "postres",
			nombre: "HUMMUS",
			descripcion:
				"Esta humilde pasta originaria de Medio Oriente se prepara con garbanzos, ajo, jugo de limón y tahini y se ha vuelto un clásico de las cocinas de todo el mundo. Este platillo de sabor ácido funciona bien como dip, con pan, con carne, con verduras, con frijoles o —escuchen esto— con un budín de arroz con Marmite.",
			img: "https://cnnespanol.cnn.com/wp-content/uploads/2017/10/cnn-comida-15.jpg",
			precio: 750,
		},
	];

	const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]);
	const [sinProductos, setSinProductos] = useState(false);
	const { idCategoria } = useParams();

	useEffect(() => {
		setLoading(true);
		setSinProductos(false);

		const promesa = new Promise((res, rej) => {
			setTimeout(() => {
				res(items);
			}, 2000);
		});

		promesa
			.then((items) => {
				if (idCategoria === undefined) {
					setSinProductos(items.length === 0);
					setProductos(items);
				} else {
					const filtered = items.filter((el) => el.categoria === idCategoria);
					setProductos(filtered);
					setSinProductos(filtered.length === 0);
				}
			})
			.catch((e) => {
				toast.error("Error al cargar los productos.");
			})
			.finally(() => {
				setLoading(false);
			});
	}, [idCategoria]);

	return <ItemList productos={productos} loading={loading} sinProductos={sinProductos} />;
};

export default ItemListContainer;
