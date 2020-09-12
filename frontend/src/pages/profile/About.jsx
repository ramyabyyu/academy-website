import React from "react";
import Title from "../../components/Title";
import Header from "../../components/Header";
import { Button } from "react-bootstrap";

function About() {
  return (
    <div>
      <Header
        title="Tentang Sekolah"
        subtitle="Academy Web, Sekolah Informatika dan Design Grafis"
      >
        <Button href="/profile/visi" variant="outline-secondary" size="lg">
          Lihat Visi Misi
        </Button>
      </Header>

      <section className="article">
        <div className="section-1">
          <Title title="Sejarah Academy Web" />
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            facilis neque nesciunt ratione ut quos ad debitis corporis natus.
            Veritatis id, voluptas porro animi, a atque laboriosam debitis velit
            possimus nostrum praesentium cum eum sint facilis molestiae placeat
            aspernatur beatae in. Quam, cupiditate adipisci eius similique natus
            voluptatibus voluptas ex enim doloremque neque fuga mollitia
            asperiores quia amet nulla facilis maxime nam nisi itaque. Rerum
            nisi, totam soluta dicta, magnam, distinctio fuga modi vitae facilis
            quam optio. Eos quam facilis eligendi odio repellat ab odit
            nesciunt, aliquam veritatis a maiores, dolorem recusandae alias
            iusto accusamus eaque assumenda adipisci, nisi quisquam aspernatur
            deleniti. Autem quaerat incidunt dolore! Assumenda quisquam hic ut.
          </p>
        </div>

        <div className="section-2">
          <Title title="Jurusan Yang Terdapat di Academy Web" />
          <h6>Multimedia</h6>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
            vel? Magnam accusantium repellat asperiores qui neque provident
            exercitationem numquam hic a ea. Quia, consectetur nesciunt suscipit
            ullam iste aspernatur eaque odit, ab amet, pariatur quos nihil
            beatae velit asperiores. Assumenda quo expedita reiciendis ducimus,
            repellendus ad quisquam unde praesentium recusandae laborum
            perferendis fuga optio id.
          </p>

          <h6>Rekayasa Perangkat Lunak</h6>
          <p className="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            modi natus ut eos? Officiis, sint! Illo nobis laborum pariatur iure
            magni nemo labore ipsa doloribus. Quam quaerat earum dignissimos
            recusandae animi iste totam sunt eos accusantium, dolorum iusto non
            eveniet maiores. Itaque perspiciatis tempora quidem necessitatibus
            illum doloribus temporibus laboriosam dolores eos! Possimus libero
            nam reiciendis quasi. Aspernatur, repudiandae incidunt.
          </p>
        </div>

        <div className="section-3">
          <Title title="Prospek Kerja Yang Ditawarkan" />
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            necessitatibus fuga cum! Blanditiis dignissimos laboriosam quasi
            reiciendis ducimus veritatis odio corporis laborum quam, deleniti
            architecto facilis, sequi quod saepe commodi consequatur vel at
            voluptatibus ab, ipsam expedita maiores placeat eligendi amet.
            Perferendis, nobis voluptate saepe vitae a et quo asperiores
            blanditiis libero quis praesentium ipsam explicabo incidunt nesciunt
            nisi beatae eaque distinctio commodi. Fuga sed culpa corrupti fugiat
            vitae esse sit rerum non voluptate, dolores minus quo. Incidunt,
            porro sunt qui autem, dolorum voluptatum nisi error in at ipsum
            voluptas praesentium suscipit, expedita laudantium repellendus vel.
            Soluta delectus corporis sequi, impedit sit nulla fugit commodi
            consequuntur suscipit. Voluptatibus, voluptatem? Quaerat cumque
            consequuntur placeat rerum reiciendis sint officia. Quas, fugiat
            quia!
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
