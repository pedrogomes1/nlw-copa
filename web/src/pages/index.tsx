import Image from "next/image";
import logoImg from "../assets/logo.svg";
import appPreviewImg from "../assets/mobiles.png";
import iconCheck from "../assets/icon-check.svg";
import userAvatarExampleImg from "../assets/users-avatar-example.png";

export default function Home() {
  return (
    <div>
      <main>
        <Image src={logoImg} alt="Logo da aplicação NLW Copa" />

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos</h1>

        <div>
          <Image
            src={userAvatarExampleImg}
            alt="Avatares de pessoas que estão utilizando a aplicação"
          />
          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>

          <form>
            <input type="text" required placeholder="Qual nome do seu bolão?" />
            <button type="submit">Criar meu bolão</button>
          </form>

          <p>
            Após criar seu bolão, você receberá um código único que poderá usar
            para convidar outras pessoas 🚀
          </p>

          <div>
            <div>
              <Image
                src={iconCheck}
                alt="Ícone redondo da cor verde com símbolo de check branco"
              />
              <div>
                <span>+2.034</span>
                <span>Bolões criados</span>
              </div>
            </div>
            <div>
              <Image
                src={iconCheck}
                alt="Ícone redondo da cor verde com símbolo de check branco"
              />
              <div>
                <span>+2.034</span>
                <span>Bolões criados</span>
              </div>
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
