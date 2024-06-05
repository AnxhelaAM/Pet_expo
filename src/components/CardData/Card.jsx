import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Card() {
  const [animals, setAnimals] = useState([]);
  const [text, setText] = useState("");
  const [searched, setSearched] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [animalDetails, setAnimalDetails] = useState(null);

  const { animal } = useParams();

  useEffect(() => {
    const fetchAnimalData = async () => {
      if (!animal) return;
      try {
        const res = await fetch(`https://freetestapi.com/api/v1/${animal}`);
        const data = await res.json();
        setAnimals(data);
        setSearched(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnimalData();
  }, [animal]);

  const searchForAnimal = async () => {
    try {
      const res = await fetch(
        `https://freetestapi.com/api/v1/${animal}?q=${text}`
      );
      const data = await res.json();
      setAnimals(data.length > 0 ? data : []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchForAnimal();
    setSearched(true);
  };

  const handleAnimalSelection = async (selectedAnimal) => {
    try {
      const res = await fetch(
        `https://freetestapi.com/api/v1/${animal}/${selectedAnimal.id}`
      );
      const data = await res.json();
      setAnimalDetails(data);
      setModalVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setAnimalDetails(null);
  };

  const filteredAnimals = searched
    ? animals.filter((animal) =>
        animal.name.toLowerCase().includes(text.toLowerCase())
      )
    : animals;

  return (
    <>
      <section className="p-8 max-w-7xl mx-auto">
        <div className="text-center">
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto flex"
            autoComplete="off"
          >
            <input
              type="text"
              name="search"
              id="search"
              placeholder={`Search for a ${animal}`}
              className="py-2 px-4 rounded shadow w-full bg-slate-400 text-white placeholder-white"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
          {filteredAnimals.map((animal) => (
            <div
              key={animal.id}
              className="relative bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200 cursor-pointer"
              onClick={() => handleAnimalSelection(animal)}
            >
              <article>
                <img
                  src={animal.image}
                  alt={animal.name}
                  loading="lazy"
                  className="rounded md:h-72 w-full object-cover"
                />
                <h3 className="text-white text-lg font-bold mt-4">
                  {animal.name}
                </h3>
              </article>
            </div>
          ))}
        </div>
      </section>

      {modalVisible && animalDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{animalDetails.name}</h2>
            <img
              src={animalDetails.image}
              alt={animalDetails.name}
              className="w-full h-64 object-cover rounded mb-4"
            />
            {animal === "dogs" && (
              <>
                   <p className="text-black"><strong>Origin:</strong> {animalDetails.origin}</p>
                <p>
                  <strong>Breed Group:</strong> {animalDetails.breed_group}
                </p>
                <p>
                  <strong>Size:</strong> {animalDetails.size}
                </p>
                <p>
                  <strong>Lifespan:</strong> {animalDetails.lifespan}
                </p>
                <p>
                  <strong>Origin:</strong> {animalDetails.origin}
                </p>
                <p>
                  <strong>Temperament:</strong> {animalDetails.temperament}
                </p>
                <p>
                  <strong>Colors:</strong> {animalDetails.colors.join(", ")}
                </p>
                <p><i> <strong>Description:</strong> {animalDetails.description}</i></p>
              </>
            )}
            {animal === "cats" && (
              <>

                <p>
                  <strong>Origin:</strong> {animalDetails.origin}
                </p>
                <p>
                  <strong>Temperament:</strong> {animalDetails.temperament}
                </p>
                <p>
                  <strong>Colors:</strong> {animalDetails.colors.join(", ")}
                </p>
                <p><i> <strong>Description:</strong> {animalDetails.description}</i></p>
              </>
            )}
            {animal === "birds" && (
              <>
                <p>
                  <strong>Species:</strong> {animalDetails.species}
                </p>
                <p>
                  <strong>Family:</strong> {animalDetails.family}
                </p>
                <p>
                  <strong>Habitat:</strong> {animalDetails.habitat}
                </p>
                <p>
                  <strong>Place of Found:</strong> {animalDetails.place_of_found}
                </p>
                <p>
                  <strong>Diet:</strong> {animalDetails.diet}
                </p>
                <p>
                  <strong>Wingspan (cm):</strong> {animalDetails.wingspan_cm}
                </p>
                <p>
                  <strong>Weight (kg):</strong> {animalDetails.weight_kg}
                </p>
                <p><i> <strong>Description:</strong> {animalDetails.description}</i></p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

