import { FormEvent, useState } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";

import { api } from "../lib/axios";

import logoImg from "../assets/logo.svg";
import appPreviewImg from "../assets/mobiles.png";
import iconCheck from "../assets/icon-check.svg";
import userAvatarExampleImg from "../assets/users-avatar-example.png";

interface HomeProps {
  poolCount: number;
  guessesCount: number;
  userCount: number;
}

export default function Home({
  poolCount,
  guessesCount,
  userCount,
}: HomeProps) {
  const [poolTitle, setPoolTitle] = useState("");

  async function handleCreatePool(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.post("/pools", {
        title: poolTitle,
      });

      const { code } = response.data;

      await navigator.clipboard.writeText(code);

      alert(
        "Bolão criado com sucesso, o código foi copiado para a área de transferência!"
      );

      setPoolTitle("");
    } catch (error) {
      alert("Falha ao criar o bolão, tente novamente!");
    }
  }

  return (
    <div className="max-w-[1124px] mx-auto h-screen grid gap-28 grid-cols-2 items-center">
      <main>
        <Image src={logoImg} alt="Logo da aplicação NLW Copa" />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image
            src={userAvatarExampleImg}
            alt="Avatares de pessoas que estão utilizando a aplicação"
          />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+{userCount}</span> pessoas já
            estão usando
          </strong>
        </div>
        <form
          onSubmit={handleCreatePool}
          className="mt-10 flex gap-2 text-gray-100"
        >
          <input
            required
            type="text"
            placeholder="Qual nome do seu bolão?"
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
            onChange={(event) => setPoolTitle(event.target.value)}
            value={poolTitle}
          />
          <button
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image
              src={iconCheck}
              alt="Ícone redondo da cor verde com símbolo de check branco"
            />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{poolCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600" />

          <div className="flex items-center gap-6">
            <Image
              src={iconCheck}
              alt="Ícone redondo da cor verde com símbolo de check branco"
            />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{guessesCount}</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image
        src={appPreviewImg}
        alt="Dois celulares exibindo uma prévia da aplicação móvel da NLW Copa"
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [poolCountResponse, guessesCountResponse, userCountResponse] =
    await Promise.all([
      api.get("pools/count"),
      api.get("guesses/count"),
      api.get("users/count"),
    ]);

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessesCount: guessesCountResponse.data.count,
      userCount: userCountResponse.data.count,
    },
    revalidate: 10,
  };
};
