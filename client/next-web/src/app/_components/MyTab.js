import {
  Card,
  CardBody,
  CardFooter
} from '@nextui-org/card';
import { BsPlusLg } from 'react-icons/bs';
import { Avatar } from '@nextui-org/avatar';
import Image from 'next/image';
import audioSvg from '@/assets/svgs/audio.svg';
import Link from 'next/link';

import { useMyCharacters } from '@/util/apiClient';

export default function MyTab({ display }) {
  const { characters } = useMyCharacters();

  return (
    <section className={`flex flex-row flex-wrap justify-center mt-10 gap-5 ${display}`}>
      <Card className="basis-48">
        <CardBody className="flex justify-center">
          <Link href="/">
            <BsPlusLg className="w-7 h-7 block my-2.5 mx-auto fill-real-silver-500" />
            <p className="text-xs leading-5 text-center text-real-silver-500 font-light">Create a character</p>
          </Link>
        </CardBody>
      </Card>
      {
        characters?.map(character => (
          <Card
            key={character.character_id}
            className="basis-48 px-2.5 pt-2.5">
            <CardBody className="px-0 pt-0 pb-4">
              <Avatar
                radius="sm"
                src={character.image_url}
                className="w-44 h-44"
              />
              <p className="name text-base text-center mt-2 font-medium">{character.name}</p>
              <p className="intro text-xs text-center mt-2 font-light">"I am burdened with glorious purpose."</p>
              <div className="flex justify-center mt-4">
                <Image
                  priority
                  src={audioSvg}
                  alt=""
                />
              </div>
            </CardBody>
            <CardFooter className="justify-center border-t-1 border-real-silver-500/20">
              <Link
                href="/" 
                className="text-xs leading-5 text-real-silver-500">
                View detail
              </Link>
            </CardFooter>
          </Card>
        ))
      }
    </section>
  );
}
