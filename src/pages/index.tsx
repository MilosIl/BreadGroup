import Card from '@/Components/Card';
import Seo from '@/Components/Seo';
import Footer from '@/Layout/Footer';
import Navbar from '@/Layout/Navbar';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Seo />
      <header>
        <Navbar />
        <h1 className='text-3xl font-bold underline'>
          Naslovna strana, naslov
        </h1>
      </header>
      <div>
        <h2 className='text-2xl font-bold'>Ko smo mi</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ut
          culpa numquam expedita repellendus dignissimos inventore dolores nobis
          hic laboriosam.
        </p>
        <h2 className='text-2xl font-bold'>Opis o nasem radu</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ut
          culpa numquam expedita repellendus dignissimos inventore dolores nobis
          hic laboriosam.
        </p>
      </div>

      <main className='bg-slate-500 p-4'>
        <section className='bg-slate-400'>
          Deo za usavajanje ljubimaca
          <Card
            owner={'Pera'}
            age={2}
            description={'opis o mom dragom ljubicu'}
            gender={'muzijak'}
            isForAdoption={false}
            isForBreeding={true}
            pedigree={true}
            race={'Nemacki ovcar'}
            species={'pas'}
          />
          <hr />
          <p>dodaj ljubimaca za usavanje</p>
        </section>
        <section className=' bg-slate-400'>
          deo za parenje ljubimaca
          <p>dodaj ljubimca za parenje</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
