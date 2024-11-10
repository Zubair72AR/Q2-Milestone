"use client";
import Button from "@/components/Button";
import Headings from "@/components/Headings";
import { ReactEventHandler, useState } from "react";
import { FiSend } from "react-icons/fi";
import React, { ChangeEvent } from "react";

export default function Contact() {
  const [inputValue, setInputValue] = useState<string>("");

  // Specify the event type for the change handler
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Specify the event type for the form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted value:", inputValue);
  };
  return (
    <div className="px-6 lg:px-12 2xl:px-24 relative">
      <Headings headText="Contact." headClass="" />
      <div></div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Phone"
            required
            className="outline-none border-gray-200 bg-gray-100 border-[1px] px-3 py-2 mt-1 rounded-md"
            onChange={handleChange}
          />
        </form>
        <Button btnText="Send Message" btnClass="" btnIcon={<FiSend />} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non
          dolor beatae enim facere, odio pariatur voluptatum, sed consequuntur
          corrupti sapiente assumenda et, quaerat nihil in. Eligendi nam
          corporis voluptatibus? Quisquam harum cumque at modi, sint recusandae,
          minus facere reiciendis, quod quia pariatur totam saepe impedit natus
          tenetur error minima soluta id. Perferendis in non quas dolore
          voluptate id impedit? Voluptatibus aut esse dolor tempore hic
          doloremque quis ipsum adipisci amet sint. Similique necessitatibus
          explicabo, beatae reiciendis minus, deserunt ad alias in repellat vel,
          excepturi quaerat praesentium doloribus ea adipisci. Nemo totam
          maxime, tempora culpa eligendi rem nobis libero ab itaque, ex iusto.
          Quidem expedita modi odio? Ipsam blanditiis fugiat unde ab obcaecati
          recusandae earum fugit fuga quia. Tempora, quibusdam? Est ullam vitae
          nihil quam eius dolore ex possimus ad sequi. Dolor obcaecati iure
          porro fuga consequuntur corrupti aspernatur iusto laborum neque, id
          consequatur, sapiente modi ducimus quaerat odio quibusdam. Laudantium
          accusamus quidem magnam recusandae dicta esse corporis aperiam hic
          temporibus velit! Minus numquam repellendus aut neque necessitatibus.
          Expedita, voluptatibus? Amet eum qui voluptatibus, nesciunt ducimus
          necessitatibus aut repudiandae voluptate. Facere velit odio doloribus
          nulla ipsam nemo, consectetur libero exercitationem tempore porro
          commodi ex voluptatem repellat. Aspernatur ducimus iure dolores quo
          quia maxime enim. Nostrum molestias odio quibusdam eaque numquam?
          Libero at, impedit provident voluptatem architecto dolore distinctio
          recusandae, quo repudiandae quas amet velit hic eaque sequi magnam?
          Reprehenderit suscipit earum totam quibusdam tempora inventore
          corporis officiis odio quas tempore. Dolores, esse velit. Voluptatem,
          natus odio? Ut accusantium dolore culpa maiores, est quos nisi
          inventore temporibus sed veniam voluptas reprehenderit, officia
          voluptate beatae, voluptatem ipsum. Qui enim ea dignissimos odit!
          Deleniti voluptatem ad exercitationem saepe repellendus officiis
          blanditiis architecto deserunt doloribus assumenda ullam, ducimus
          incidunt nulla ipsum dolores sunt, iure eligendi necessitatibus illo
          aliquid commodi ab qui totam autem. Et. Provident dicta officiis
          praesentium neque accusantium quo maxime non, autem doloremque
          reprehenderit voluptas ducimus quas quam, facere perferendis veniam
          hic eveniet enim quia repellat temporibus modi quibusdam. Laudantium,
          labore ex? Sapiente repellat vero voluptatibus atque saepe eaque ipsam
          rem quae soluta porro distinctio tempore ab tempora hic nihil minus
          aliquam, a ex, voluptatum suscipit? Dolores placeat quibusdam autem
          dolore eligendi. Voluptatum necessitatibus excepturi pariatur aperiam
          suscipit, quos, praesentium laboriosam corrupti debitis quam
          cupiditate perspiciatis reprehenderit officia minima nobis ipsa ad
          facere porro vel, sequi libero aliquid hic inventore. A, autem.
          Repellat eaque nihil ipsam enim aspernatur praesentium maxime
          voluptatibus dolorem voluptate ipsa dolorum labore quis sit, aliquam
          vitae delectus, odio corporis molestias tenetur incidunt eius hic!
          Aliquam aspernatur excepturi voluptatum. Sapiente, fuga temporibus.
          Repudiandae perferendis quae nemo et accusantium, vitae provident
          dicta odio laudantium culpa, soluta atque cupiditate? Repudiandae eius
          iusto beatae quas autem earum illum quos molestiae officia quidem.
          Quis dicta voluptatibus dignissimos laboriosam asperiores officia
          sapiente eum. Ad, ex? Vel, maxime voluptate facere sit hic sunt, nemo
          voluptas eligendi illo atque beatae perspiciatis modi ullam
          perferendis obcaecati minus? Quisquam quos dolor deleniti natus
          aperiam id, voluptatum voluptatibus omnis nostrum, praesentium facere
          eaque sint. Laudantium sit minus, voluptatibus velit neque id ipsum
          optio? Animi quibusdam veritatis magnam tenetur. Accusantium. Saepe
          libero, et facilis doloribus assumenda aut quod earum ad accusantium
          illum molestias temporibus voluptates repellat error dolore nihil
          tenetur. Maxime cum nisi nemo modi quas, exercitationem pariatur omnis
          saepe. Ducimus, quasi! Harum voluptatum facilis aliquam repellendus,
          dolorem quam nulla tempora iure consequatur quis totam, voluptates
          earum aperiam nam tempore nemo fuga. Nisi error facere, porro nesciunt
          praesentium provident autem! A, facilis ut, earum aspernatur deleniti
          culpa fugiat odit saepe ad doloribus reprehenderit beatae rem
          perferendis nihil repudiandae tempora itaque nesciunt officiis
          accusamus aliquam aliquid voluptates excepturi. Sequi, expedita nisi.
          Repellat in sit dolore officia tempora porro obcaecati praesentium
          quis maiores soluta? Voluptate molestiae perspiciatis corporis ipsam
          at possimus repellat obcaecati, vitae alias eius aspernatur, deleniti
          nobis tempore. Perspiciatis, fugiat. Incidunt enim at accusamus ipsam
          corrupti, natus nemo doloremque, tempora aut dicta suscipit beatae
          nisi minima assumenda corporis quasi amet rem perferendis animi
          reprehenderit? Quasi libero at eos a? Veritatis? Quidem beatae aliquid
          ipsa vero error amet, culpa non alias doloribus soluta nesciunt
          dignissimos saepe dolores. Laborum adipisci exercitationem cum quia,
          esse fuga enim minima animi, maxime ullam nulla! Eos! Molestias
          commodi animi reiciendis quidem alias velit deserunt molestiae
          incidunt itaque blanditiis quisquam tempora accusamus a, dolorum ipsa
          assumenda vitae tempore quo modi unde, repellendus minima eum
          voluptates! Repellendus, provident? Veniam sequi excepturi eligendi
          enim possimus magnam alias. Cupiditate inventore repudiandae ullam at
          iste perferendis sunt provident! Impedit maxime corrupti est hic sed
          consectetur velit consequatur amet voluptatem, ea dolores! Vitae qui
          quisquam molestiae repellat non numquam, libero facilis culpa labore!
          Accusamus eligendi iusto repudiandae reiciendis quod quos esse odio ad
          voluptates. Eius consequuntur repellendus fugit qui fugiat quo
          ratione. Aut commodi sed illum animi quos quo cum inventore vero,
          nostrum ullam necessitatibus. Laudantium similique, corrupti
          voluptatibus labore doloribus modi rerum molestiae commodi nam
          recusandae itaque exercitationem ipsam ex iusto. Consequuntur, earum
          modi! Saepe iure consequuntur magnam facilis ut impedit, itaque
          sapiente repellendus praesentium amet recusandae expedita veritatis
          nobis aspernatur, voluptatibus incidunt non, vero quidem omnis quas
          quisquam. Error, voluptatem? Animi debitis voluptatum voluptatibus
          molestiae ullam accusamus at quasi explicabo error veritatis cum nobis
          non unde omnis esse nemo, ad odit aliquid voluptatem libero voluptate
          sed nam! Inventore, odit modi! Earum, tempora animi optio error enim
          corrupti dicta. Ab sunt neque consequatur unde esse hic amet! Ipsam
          enim fugit asperiores explicabo! Recusandae modi a blanditiis eveniet
          fuga eaque. Accusantium, nulla? Expedita eum porro architecto esse
          placeat illum itaque soluta minus a tempora sunt quos natus animi
          cupiditate corrupti possimus error sapiente repudiandae excepturi,
          recusandae eaque deserunt omnis. Magnam, quod nihil? Laudantium iure
          voluptatibus facilis velit unde sunt mollitia amet numquam ratione
          ullam pariatur laboriosam ab, odio quo. Voluptates doloremque
          voluptate, aut libero suscipit veritatis amet dolor officiis maxime
          vel ducimus? Quia ut vel sed, optio corrupti a architecto reiciendis
          eligendi earum vero ex aspernatur velit voluptatum ullam non quos,
          rerum hic minima id debitis quibusdam enim! Quasi obcaecati libero
          autem? Accusamus provident pariatur dignissimos ea, qui harum quod
          consequuntur dolorum veniam molestias aspernatur cum, hic dolorem
          molestiae, odit facilis. Minima necessitatibus blanditiis natus
          ducimus exercitationem ex quasi quisquam odio inventore. Earum
          voluptatibus culpa ex, libero odio maxime odit, dolorem iure ipsum,
          commodi quaerat inventore provident recusandae voluptatum repudiandae.
          Fugit similique aperiam ullam porro dolorum nostrum praesentium
          maiores exercitationem asperiores aliquid. Facere, consectetur? Odit
          ea explicabo nisi in laudantium ipsum atque, odio temporibus error
          repellendus ad dolore optio, cum illo totam accusantium magni quo
          veritatis esse, quasi expedita cupiditate corrupti perferendis.
          Quibusdam ea impedit rem dolore magnam tenetur nobis ab facilis, ex
          aperiam neque distinctio architecto qui, magni explicabo ullam
          veritatis expedita molestiae quam ipsam quo accusantium quod,
          voluptatibus a. Iste! Nulla error vero eligendi cum illum iure aliquam
          ipsam amet commodi ea iusto dolore tempore corrupti, ipsa eaque quam,
          modi sint perspiciatis nam est adipisci quisquam id placeat. Illum,
          explicabo. Dignissimos ad, explicabo voluptates laborum magni
          temporibus. Sint itaque illo repellat iusto ipsum soluta, quod nam.
          Qui officia quaerat voluptas! Sequi in placeat, possimus totam nemo
          ratione molestiae dignissimos. Dolor! Veritatis quibusdam repudiandae
          quod magni perspiciatis adipisci quaerat voluptatibus dolorem. Natus,
          fugit quasi minima maxime cum possimus quo blanditiis nam iure
          veritatis, quos unde, ex illo corrupti? Magnam, maiores voluptas!
          Temporibus nostrum iure voluptatum dicta dolorem incidunt quia vero,
          quae corporis ullam eligendi, ipsam debitis veniam reiciendis, saepe
          quibusdam numquam aperiam. Totam facere hic inventore. Ratione porro
          voluptate minima hic? Optio fugiat perspiciatis cum commodi quam
          molestias nemo suscipit, pariatur cupiditate earum quis fuga dolore ab
          in distinctio id recusandae odio explicabo alias modi nulla. Commodi
          iusto obcaecati repellendus ducimus. Dignissimos, voluptatibus?
          Corporis modi minus repellat sunt, perspiciatis dolor officiis odit
          non iure ad provident esse explicabo vitae, nemo architecto sequi
          officia? Earum aliquid omnis, possimus repellendus quibusdam deleniti
          molestias? Error natus reiciendis nisi eligendi facilis repellendus
          ipsum necessitatibus, soluta unde voluptate vero explicabo placeat
          libero sed fugiat dignissimos quibusdam! Consequatur ab quae delectus
          magnam molestiae necessitatibus provident libero tempora. Neque,
          tenetur architecto. Deleniti voluptatem possimus asperiores quo
          quibusdam voluptatum quidem sint expedita maiores a explicabo,
          impedit, quia quas quod vero sequi odit tempore beatae perspiciatis
          ipsum repellat iusto libero? Debitis dignissimos labore dolorum animi
          recusandae maxime eligendi? Voluptatibus quas laudantium aperiam amet
          molestias? Amet est dolores, blanditiis illum sequi officia eveniet
          accusantium laudantium iure doloremque dignissimos, ullam delectus
          eaque. Doloribus voluptatem consequatur quis a commodi? Dolorem
          expedita, ratione consequatur eius nesciunt libero officiis repellat
          explicabo corrupti labore harum, laboriosam quae veritatis ad sapiente
          nemo omnis aut ipsa, doloremque distinctio. Odit tempora dolorum rerum
          sunt officiis accusantium voluptate voluptatem tempore, aperiam atque
          dignissimos eaque. Unde voluptatem ad explicabo ex odit similique
          dolores quaerat praesentium. Facere iste consequuntur cupiditate ad
          quos? Porro magni corporis sit vitae odit. Officia, facere amet?
          Temporibus vel voluptate fuga consequuntur quia, asperiores ipsum
          ratione molestias rerum, consequatur dolore autem ducimus neque ad
          eveniet quidem dolores pariatur. Distinctio debitis laboriosam
          eveniet. Doloribus laudantium dolore sequi repellendus obcaecati odio
          alias. Tempora, delectus dignissimos hic culpa ipsum provident
          corrupti consequatur laudantium quas consequuntur officiis voluptate
          iste blanditiis, possimus quos? Minus deserunt esse minima fugiat
          praesentium cupiditate nesciunt ratione aliquam laudantium amet,
          facilis adipisci totam quae recusandae. Quam repellendus laboriosam
          minus, error, soluta, optio voluptatum vero beatae itaque cum
          reiciendis. Tenetur eveniet et commodi libero minus culpa at. Qui
          recusandae, quos tempora repudiandae et dolorem officiis dignissimos
          asperiores nam ad quisquam pariatur placeat ullam voluptatem
          voluptatibus. Rem nulla amet consectetur. Error earum neque facilis
          laborum tempore recusandae. Qui sapiente tenetur ullam error est
          soluta quam eum suscipit fuga, unde assumenda consequatur odio modi ea
          perferendis veritatis nobis repellat, et facilis. Natus inventore
          corrupti accusantium labore eum, sapiente nemo animi neque cumque
          adipisci dolorum, ab ipsum harum eligendi velit nostrum eaque minima
          voluptate esse, necessitatibus perspiciatis similique. Maxime
          consectetur sint aliquid? Placeat dolore cupiditate voluptatem quidem
          voluptate, debitis vel totam maiores unde reiciendis iure laboriosam
          quibusdam dolores, in eligendi itaque odio necessitatibus veritatis
          adipisci exercitationem. Dolorum repudiandae blanditiis hic earum
          officiis. Id, delectus ipsa? Magnam perspiciatis, corrupti est
          voluptas, dolorum ea asperiores dicta, sequi fugit deleniti nostrum.
          Amet, non totam rem, optio nemo explicabo ut sint, fugiat ipsa
          perspiciatis libero porro. Unde sapiente minus nihil. Vero nesciunt
          illum sapiente hic necessitatibus? Sequi inventore nisi, vel ipsam
          reiciendis vitae nulla maiores minus porro aliquid asperiores
          consequuntur quas suscipit totam aut nostrum ipsa. Voluptas optio eum
          commodi tempore fuga. Quo nisi natus commodi tempore magni ullam esse,
          quibusdam voluptates autem, officiis enim quasi impedit placeat
          eveniet at obcaecati odio omnis velit delectus maiores! Voluptas fuga
          dolorem eum voluptate quam sed voluptatem ad nihil, sapiente aliquam
          autem. Cumque distinctio, officiis ex dolor adipisci voluptatibus
          porro, iusto vel, ducimus consequuntur tempore ipsam maxime temporibus
          eligendi? Distinctio, adipisci nulla eos, eveniet, reprehenderit optio
          delectus porro vel voluptatum soluta natus recusandae? Ut eaque
          blanditiis nobis, hic consequuntur iste earum similique. Saepe
          accusamus earum reiciendis quibusdam praesentium eum! Deleniti eos ab
          dicta. Error nam praesentium exercitationem maxime amet. Quam aut
          deserunt id explicabo amet nulla quidem, eius sequi, voluptates
          numquam porro praesentium. Laudantium voluptatibus aut tempora nemo
          excepturi. Eaque aliquam deserunt quibusdam? Ea culpa veritatis
          repudiandae nulla quod quibusdam optio tempora, id odit at debitis
          voluptate reprehenderit voluptates reiciendis, numquam aperiam
          deserunt a ad laborum dolorum iure excepturi. Veniam dignissimos
          quisquam magnam architecto neque optio veritatis distinctio placeat
          repellendus deserunt nisi eaque exercitationem, eius totam iste
          doloribus nesciunt possimus, sunt corporis eos commodi. Cumque
          voluptates itaque quae autem! Veritatis, ducimus molestiae ex,
          blanditiis officiis exercitationem fuga alias obcaecati laboriosam
          quasi maxime! Nostrum cum quidem veritatis obcaecati totam? Illo,
          atque. Voluptates minima accusantium voluptatibus, placeat vitae iure
          esse corrupti. Obcaecati totam quidem mollitia aperiam tempore nulla
          magni accusantium, nam iure rem commodi natus eveniet dolore. Labore
          ad nesciunt ipsa optio id placeat, hic eligendi doloribus nisi
          obcaecati? Consequuntur, modi! Minima ipsam exercitationem omnis modi
          placeat, accusantium, necessitatibus unde doloribus aspernatur,
          delectus sequi autem. Adipisci dolor saepe vitae maiores sint, odio
          reiciendis velit blanditiis in nam tenetur molestiae quos nobis. Dolor
          excepturi, recusandae nesciunt eius quos placeat repudiandae quidem
          ducimus iste quibusdam quod et voluptate quo provident aut nam eum ab
          quia, neque nemo magni dolorum molestiae. Perferendis, est porro. Quae
          facilis itaque magni sunt dicta facere delectus rerum atque, culpa qui
          expedita beatae, quibusdam recusandae reprehenderit, aut numquam ullam
          repellat incidunt sed iure nulla quod. Ad illo animi optio! Est
          laboriosam nemo dolore rem aliquid voluptates culpa ipsam omnis sint
          nostrum! Quas totam numquam aut laborum exercitationem pariatur fugit
          aliquam, reiciendis nulla. Consequatur tempora voluptate tenetur,
          earum modi quae. Molestiae adipisci dolorum cupiditate quam expedita
          nobis suscipit voluptas, perspiciatis odit amet, et corrupti
          voluptatibus, beatae voluptatem quis error minima distinctio quos
          sint. Quidem aut excepturi enim tenetur accusantium eos! Nemo at esse
          optio neque error adipisci dicta eos unde praesentium tempore. Rerum
          blanditiis accusantium ipsam voluptatibus temporibus? Fuga iste quod,
          eum quos magnam minima iure eveniet asperiores hic laboriosam! Maxime
          id quae aliquam incidunt, eos ipsa est, praesentium suscipit
          architecto dignissimos inventore ea, maiores tempora enim doloremque
          nam quis similique reiciendis at aperiam? Vitae, fugit in! Ut, iure
          quibusdam. Voluptatum quidem sit dolorum ipsam ullam veritatis
          expedita optio blanditiis, voluptatem, odio nisi illo repellendus
          similique numquam explicabo perspiciatis ut hic minus doloremque esse
          ipsum non deleniti! Aperiam, excepturi qui. Ex, architecto provident
          repudiandae porro iure saepe. Sint sed ipsum animi nobis impedit
          inventore quis voluptatum quia iste in, repudiandae error libero
          aperiam dolores qui, ipsam exercitationem. Inventore, et ipsam! Minus
          harum dolores tempora non veritatis, itaque voluptatum alias odit
          recusandae fugit officia suscipit quo neque nostrum sequi mollitia
          sint sed atque! Suscipit sint autem recusandae nulla sequi vel sit.
          Obcaecati, eos repellat, earum quasi, ducimus esse sint alias officia
          vitae quae et libero enim. Earum, commodi optio facere amet
          perferendis, sint est praesentium ipsum, saepe perspiciatis placeat
          tempore dolor? Exercitationem magni, nisi numquam magnam facilis
          aspernatur pariatur rerum explicabo repellendus dignissimos suscipit
          vel dolorum, commodi, architecto eius beatae excepturi aut libero
          officiis quasi nihil! Eum, molestiae maxime! Ratione, explicabo. Enim
          sed rerum, commodi, fugiat rem blanditiis cupiditate dicta cumque
          facilis earum facere pariatur vero fuga quia ipsam harum iste at nihil
          maiores sunt officia saepe dolore officiis ipsa? Corrupti. Quia cum
          rem qui amet quaerat explicabo neque modi enim deleniti libero,
          molestiae atque nostrum nesciunt veritatis ab provident vel iusto
          distinctio consectetur. Veritatis maxime neque iste porro cupiditate
          quis. Ratione doloribus rerum voluptatem numquam? Rem autem amet
          quidem repellat repellendus impedit. Quibusdam natus magni, voluptate
          commodi facere aliquid veniam sed aut dolorum deleniti ut tenetur
          quasi, ratione quam tempora. Consequuntur facilis illum dolore at
          earum sunt voluptates, atque recusandae quam eum? Atque, eum
          distinctio. Mollitia vero ab similique accusantium sint architecto
          aspernatur? Corporis magnam ut temporibus in harum doloremque? Dolore
          repudiandae saepe debitis consequatur dolores dicta, perferendis
          commodi delectus mollitia perspiciatis deserunt optio laudantium
          reiciendis accusamus? Minima totam voluptatibus rerum sit libero,
          animi recusandae quis veniam ipsam deserunt quas? Maxime quisquam,
          deserunt tenetur laudantium molestiae asperiores sunt nobis adipisci
          quam porro quia reprehenderit repellendus sit voluptatem commodi
          voluptatibus distinctio, aliquid dignissimos qui incidunt minus et
          harum fugiat iure. Temporibus? Eveniet quisquam in ea rem odio quis
          deleniti repudiandae officiis minus molestias quos perferendis dolore
          dolorem culpa, assumenda illo vitae! Illum quod eaque atque excepturi
          unde, consectetur dolorem eum voluptatem. Tempora quibusdam deleniti
          eveniet minima at laborum ipsam voluptatibus architecto, doloribus
          exercitationem atque commodi neque tenetur aliquam illo? Itaque, odit
          accusamus ab est totam nam culpa fugit obcaecati neque repellat.
          Veniam ea officia molestiae dolores necessitatibus autem inventore
          aperiam tenetur debitis soluta. Cumque, soluta quo hic voluptatibus
          nostrum asperiores laboriosam accusamus itaque deleniti ad? Qui ipsum
          debitis porro fugit numquam. Qui, labore impedit ipsum aut, deserunt
          nam, totam in quae est officiis nulla. Voluptates esse corrupti
          suscipit explicabo, libero vel ullam similique quibusdam deserunt
          blanditiis impedit dolore asperiores. Nostrum, laboriosam? Officia aut
          non perspiciatis soluta sed sequi modi cum in laboriosam. At, officiis
          facere possimus iste beatae, quibusdam in excepturi debitis totam
          deserunt ex delectus id, nostrum necessitatibus illo optio. Illum
          minus at nulla minima ab hic praesentium perspiciatis officia dicta
          quisquam qui quis ipsum assumenda nobis recusandae, dolor debitis
          dolorum mollitia eius doloremque molestias atque libero, cumque
          delectus. Ab. Delectus praesentium laborum rerum nobis voluptatum
          itaque harum rem enim. Aliquid nostrum officiis dolores maxime ipsum,
          culpa magni mollitia nemo minus debitis a est ducimus, nesciunt dolor
          esse animi cupiditate. Tempore, cumque autem? Earum quia officia ullam
          quod, aspernatur natus? Consectetur facilis consequatur eveniet qui
          deserunt, optio tempore? Eaque, totam soluta. Ut ea officia saepe?
          Minima iusto accusantium recusandae sint. Ipsa libero, mollitia, quam
          amet ipsam neque repellat, hic ipsum voluptate cumque praesentium
          omnis. Corporis laboriosam expedita sit inventore, quis laborum
          commodi maxime eius, ratione vitae magnam nihil quibusdam vel. Veniam
          repellat molestiae architecto officiis earum a, rerum adipisci qui
          expedita nihil asperiores quam reiciendis vero labore nemo! Tempora
          omnis commodi facilis quas consectetur mollitia dignissimos obcaecati
          quibusdam veniam nisi. Repellendus perferendis cum alias ipsa quam
          quibusdam distinctio, pariatur asperiores expedita dolores corrupti
          rem porro quidem laboriosam voluptas dicta voluptatem earum? Ut
          inventore omnis atque, voluptas enim tempore quis repellat. Est magni
          incidunt, mollitia soluta sed in vero alias dicta saepe minima autem a
          tempore cumque ducimus pariatur ipsam quis sint voluptates eum dolorum
          provident, praesentium facere eius. Sit, illum. Eius architecto
          eveniet quo iure molestias, nulla dolore molestiae praesentium
          doloribus. Praesentium temporibus nesciunt, tenetur tempora,
          consequatur in facere enim doloremque at et, sequi voluptatum possimus
          expedita fugit. Repellat, exercitationem. Optio distinctio
          necessitatibus quidem. Cum tenetur dolorum, blanditiis quaerat culpa
          doloribus dicta recusandae itaque, sequi reiciendis aliquam quas modi
          tempora ratione, sed maxime. In, totam soluta inventore quis commodi
          fuga? Optio, atque? Quidem eaque doloremque beatae rerum rem mollitia,
          impedit in asperiores quas magnam enim dolor harum a officia sed illo,
          nemo voluptate. Maxime, maiores corrupti labore quod et in. Blanditiis
          ullam similique commodi facilis atque id temporibus culpa a velit. Nam
          reiciendis, magnam dignissimos in magni quia error odio. Et amet quia
          labore alias eius sint aut dolores molestias? Expedita dolorum optio
          cum minima similique at nobis, hic odit placeat suscipit excepturi
          quia unde iste veniam ex neque quisquam voluptatem. Voluptatibus,
          doloremque harum eveniet et provident aliquam consequatur recusandae.
        </p>
      </div>
    </div>
  );
}
