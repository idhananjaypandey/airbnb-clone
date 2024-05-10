'use client';

import Image from "next/image";

interface AvaratProps {
  src: string | null | undefined
}

const Avatar: React.FC<AvaratProps> = ({
  src
}) => {
  return (
    <Image
      className=""
      height="30"
      width="30"
      alt="Avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
