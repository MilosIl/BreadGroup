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
        <h2>Ko smo mi</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ut
          culpa numquam expedita repellendus dignissimos inventore dolores nobis
          hic laboriosam.
        </p>
      </div>
      
      <main>
        <section>Deo za usavajanje ljubimaca
          <Card/>
        </section>
        <section>deo za parenje ljubimaca</section>
      </main>
      <Footer />
    </div>
  );
}
