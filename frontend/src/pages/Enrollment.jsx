import React from "react";
import Header from "../components/Header";
import { Accordion, Button, Card } from "react-bootstrap";
import Title from "../components/Title";

function Enrollment() {
  return (
    <div>
      <Header
        title="Pendaftaran Academy"
        subtitle="Jadwal belajar Academy dimulai tanggal 21 Februari 2021"
      >
        <p>Anda perlu registrasi Akun untuk mendaftar</p>
        <Button href="/auth/register" size="lg" variant="outline-secondary">
          Daftar Sekarang
        </Button>
      </Header>

      <section className="article">
        <div className="section-1">
          <Title title="Pendaftaran Calon Peserta Academy" />
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            velit ratione ullam, ducimus eos earum perspiciatis vel dicta at id
            corporis et nesciunt quos, tempore totam in nihil, cupiditate porro
            odio magnam ad dolore? Dignissimos, itaque iure quas praesentium
            facere dolorum debitis, aperiam earum nostrum quia unde deleniti
            obcaecati quis iusto veritatis corporis officiis voluptates eveniet!
            Vitae, recusandae animi. Odit, fuga error? Temporibus nesciunt
            praesentium eum quaerat esse commodi ratione eveniet veritatis
            voluptates labore ipsa modi sint vel, at ducimus!
          </p>
        </div>

        <div className="section-2">
          <Title title="Registrasi Akun Untuk Peserta Online" />
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas
            nostrum qui consequuntur officiis excepturi explicabo repudiandae
            doloribus, labore distinctio alias ducimus adipisci non maiores
            aperiam impedit magni praesentium corrupti a eos sit? Eius ullam
            itaque saepe tempora, fugiat id aliquam tenetur provident atque
            suscipit aperiam quibusdam magnam asperiores delectus iste
            laudantium? Reprehenderit autem fugiat dolor. Fuga id, dicta modi ad
            recusandae dolor qui placeat rerum. Qui commodi ea consequuntur ad
            veritatis aut quaerat sint?
          </p>
        </div>

        <div className="section-3">
          <Title title="Biaya Pendaftaran" />
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
            nostrum rem omnis, quisquam autem nam quae tempora fugit est odit
            necessitatibus delectus ad iste nulla, vitae ab similique id
            exercitationem suscipit eveniet ipsam cupiditate optio molestiae
            cum. Sint, laboriosam! Nesciunt animi numquam illum iusto quidem
            deleniti labore ratione cum facere tenetur praesentium error,
            similique sequi omnis repellendus quam fuga sapiente?
          </p>
        </div>
      </section>

      <div className="faq mb-5">
        <Title title="Frequently Asked Question" />
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="outline-light"
                eventKey="0"
                className="text-dark"
              >
                <h6>Bagaimana Caranya Mendaftar?</h6>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p className="lead">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                  nam sapiente reprehenderit corrupti adipisci ratione
                  praesentium veritatis aliquid quae fugiat consectetur enim,
                  debitis nulla tempora modi sed distinctio alias, assumenda
                  aperiam, delectus tenetur! Voluptas ab sint totam deleniti
                  quaerat vero.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="outline-light"
                eventKey="1"
                className="text-dark"
              >
                <h6>Bagaimana Caranya Registrasi Akun Pendaftar?</h6>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p className="lead">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis maiores, tenetur explicabo nemo sed, reiciendis
                  facilis dolores in, accusantium at magni dolor nisi
                  voluptates? Eaque nemo ratione quia, quae unde doloremque
                  quisquam quo nesciunt soluta fugiat ab aspernatur, alias velit
                  laborum assumenda, ullam voluptatum fuga.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="outline-light"
                eventKey="2"
                className="text-dark"
              >
                <h6>
                  Bagaimana Cara Melakukan Pembayaran Melalui Virtual Account
                  Bank atau Indomaret?
                </h6>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <p className="lead">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis maiores, tenetur explicabo nemo sed, reiciendis
                  facilis dolores in, accusantium at magni dolor nisi
                  voluptates? Eaque nemo ratione quia, quae unde doloremque
                  quisquam quo nesciunt soluta fugiat ab aspernatur, alias velit
                  laborum assumenda, ullam voluptatum fuga.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="outline-light"
                eventKey="3"
                className="text-dark"
              >
                <h6>Kemana Saya Harus Menghubungi Jika Ada Masalah?</h6>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <p className="lead">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis maiores, tenetur explicabo nemo sed, reiciendis
                  facilis dolores in, accusantium at magni dolor nisi
                  voluptates? Eaque nemo ratione quia, quae unde doloremque
                  quisquam quo nesciunt soluta fugiat ab aspernatur, alias velit
                  laborum assumenda, ullam voluptatum fuga.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default Enrollment;
