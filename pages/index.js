import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';

function Home() {
  const router = useRouter();
  const [name, setName] = React.useState(''); // O retorno do useState é uma "tupla" ['valor', function]

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>CSS TricQuiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              {`${db.description}`}
            </p>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              // router manda para a proxima pagina
            }}
            >
              <Input
                name="NomeDoUsuario"
                onChange={(event) => setName(event.target.value)}
                  // State
                placeholder="Qual seu nome?"
                value={name}
                autoComplete="off"
              />
              <Button disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h3>Quizes da Galera</h3>
            <p> lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/henrfarias/CSS-Tricquiz" />
    </QuizBackground>
  );
}

export default Home;
