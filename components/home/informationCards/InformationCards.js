import React from 'react'
import Link from 'next/link'

function InformationCards() {
  return (
    <div className='informationCards_main'>
    <section className='informationCards_container'  style={{marginTop: 20}}>
        <div className='informationCards_contentBx'>
            <h2 className='informationCards_heading'>Wir über uns</h2>
            <p>
            <span className='font-bold'> Spezialität:</span> <br/> Gerbung jeglicher Häute und Felle mit Haar.

Pelzzurichtungen und Lohngerbungen in Spezialgerbung alterungsbeständig und unempfindlich gegen Luftfeuchtigkeit.
<br/>
<br/>
<span className='font-bold'>Lagerverkauf:</span> <br/> Rind- und Wildfelle, Schaffelle, medizinische Felle, Möbelleder, Bekleidungsleder und Lederriemen. Spezialleder für Jagdbekleidung. Zur Verarbeitung stehen verschiedene Lederarten zur Verfügung.
<br/>
<br/>
<span className='font-bold'>Lammfellartikel:</span> <br/> Lammfelldecken in jeder Größe, Babyfelle, Couchfelle, Autositzfelle, Rollstuhlfelle, Pferdesatteldecken, Pantoffeln, Handschuhe, Fahrradsatteldecken und vieles mehr.
<br/>
<br/>
<Link href='/kontakt'><a className='underline cursor-pointer'>Sonderanfertigungen auf Anfrage</a></Link>. Bei Interesse und weiteren Fragen stehen wir Ihnen gerne zur Verfügung. Wir freuen uns darauf, auch Sie als Kunde begrüßen zu können.
            </p>
        </div>  
        <div className='informationCards_imgBx'></div>
    </section> 
</div>
  )
}

export default InformationCards