import { useEffect, useState } from 'react';
import './traits.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Trait {
    title: string;
    description: string;
    characters: [
        {
            name: string;
            image: string;
        },
    ];
}

const defaultTrait: Trait = {
    title: 'Trait',
    description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus, eaque praesentium sapiente, ex quis laborum voluptates similique enim tenetur, quam esse. Iusto commodi eum alias laudantium, labore itaque numquam, corporis pariatur molestiae sunt architecto quod hic suscipit veritatis nemo recusandae dolor optio officiis provident molestias illo. Similique, qui sunt? description',
    characters: [
        {
            name: 'Trait Character',
            image: 'https://placehold.co/128',
        },
    ],
};

export default function Traits() {
    const [trait, setTrait] = useState<Trait>(defaultTrait);
    const [traits, setTraits] = useState<Trait[]>([defaultTrait]);
    const [traitNumber, setTraitNumber] = useState(0);

    useEffect(() => {
        fetch('/characters/contents.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTraits(data as unknown as Trait[]);
                setTrait(traits[traitNumber]);
            });
    }, []);

    return (
        <>
            <button
                onClick={() => {
                    const next = traitNumber - 1;
                    if (next < 0) return;

                    setTraitNumber(next);
                    setTrait(traits[next]);
                }}
            >
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </button>
            <button
                onClick={() => {
                    const next = traitNumber + 1;
                    if (next >= traits.length) return;

                    setTraitNumber(next);
                    setTrait(traits[next]);
                }}
            >
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
            <ul className="traitsMarquee">
                <li className="trait" key={trait.title}>
                    <h2>{trait.title}</h2>
                    <p>{trait.description}</p>
                    <ul className="characters">
                        {trait.characters.map((character) => (
                            <li className="character" key={character.name}>
                                <img
                                    src={character.image}
                                    alt={`${character.name}'s Picture`}
                                />
                                {character.name}
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
