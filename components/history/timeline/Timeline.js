import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Drei_Generation from '../../../images/geschichte/3_Generation.jpg';
import Vier_Generation from '../../../images/geschichte/4_Generation.jpg';
import Fuenf_Generation from '../../../images/geschichte/5_Generation.jpg';
import Stand from '../../../images/geschichte/Stand1.jpg';
import StandT from '../../../images/geschichte/Stand2.jpg';
import Logo from '../../../images/gerberei-logo.png';

function Timeline() {
  return (
    <div className='timeline_main'>
    <section className="timeline-section">
            <div className="timeline-items">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Stammbaum</div>
                    <div className="timeline-content">
                        <h3>1. Generation</h3>
                        <p>Die Familie Gescher gründet 1810 die Gerberei</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Stammbaum</div>
                    <div className="timeline-content">
                        <h3>2. Generation</h3>
                        <p>Carl Vill 1789-1840 <br/>Maria Gescher 1789-1867</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Stammbaum</div>
                    <div className="timeline-content">
                        <h3>3. Generation</h3>
                        <p>Carl Vill 1820-1910 <br/> Emilie Kock 1834-1907</p>
                        <div className='pt-4 '>
                            <Image src={Drei_Generation} width={100} height={150} className='rounded-lg' alt='Dritte Generation der Gerberei Vill Familie'/>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Stammbaum</div>
                    <div className="timeline-content">
                        <h3>4. Generation</h3>
                        <p>Carl Vill 1873-1958<br/>Elisabeth Ridder 1880-1949</p>
                        <div className='pt-4'>
                            <Image src={Vier_Generation} width={100} height={150} className='rounded-lg' alt='Vierte Generation der Gerberei Vill Familie'/>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Stammbaum</div>
                    <div className="timeline-content">
                        <h3>5. Generation</h3>
                        <p>Karl Vill 1911-1992<br/>Paula Lechleitner 1916-2000</p>
                        <div className='pt-4'>
                            <Image src={Fuenf_Generation} width={200} height={150} className='rounded-lg' alt='Fuenfte Generation der Gerberei Vill Familie'/>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Stammbaum</div>
                    <div className="timeline-content">
                        <h3>6. Generation</h3>
                        <p>Elmar Vill 1949 <br/>Ursula Marx 1950 </p>
                    </div>
                </div>                
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Stammbaum</div>
                    <div className="timeline-content">
                        <h3>7. Generation</h3>
                        <p>Patrick Vill 1977</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Firmenlogo</div>
                    <div className="timeline-content">
                        <h3>Das Aktuelle Firmenlogo</h3>
                        <p>	
Firmenlog der Gerberei Vill
Das aktuelle Firmenlogo wurde ca. 1930 von Karl Vill sen. entworfen. Es genutzt die Buchstaben des Names seines Vater Carl Vill für die Symbolisierung eines Gerbfasses</p>
                    <div className='pt-2'>
                        <Image src={Logo} height={150} width={130} className='rounded-lg' alt='Logo der Gerberei'/>
                    </div>
                    </div>
                </div>
                
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Firmenlogo</div>
                    <div className="timeline-content">
                        <h3>Symbolisierung des Firmenlogos</h3>
                        <p>
                            <span className='font-bold pr-2'>C :</span> 
                            zeigt den Rand eines Gerbfasses, das zum Be- bzw. Entladen geöffnet ist. 
                            <br/>
                            <br/>
                            <span className='font-bold pr-2'>V :</span> 
                            zeigt den Zugabetrichter für Gerbstoffe durch die Mittel der Achse des Gerbfasses.
                            <br/>
                            <br/>
                            <span className='font-bold pr-2'>i :</span> 
                            zeigt die Achse mit Aufhängung des Gerbfasses.
                            <br/>
                            <br/>
                            <span className='font-bold pr-2'>L :</span> 
                            zeigt zwei Felle/Leder, die sich im Gerbfass befinden.
                            <br/>
                            <br/>
                            </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date"></div>
                    <div className="timeline-content">
                        <h3>Übers Gerberhandwerk</h3>
                        <p>Das Gerberhandwerk ist das älteste Handwerk der Welt. Auch wenn die Lederindustrie heute oft industriell mit Maschinen betrieben wird, erfordert die Fellgerbung viel handwerkliches Geschick. Die Gerberei Vill hat sich auch die handwerkliche, traditionelle Gerbung von Fellen und Häuten mit Haar spezialisiert.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Standort</div>
                    <div className="timeline-content">
                        <h3>Über Horstmar</h3>
                        <p>Seit 1810 befindet sich die Gerberei Vill in der Stadt Horstmar. Auch die Stadt Horstmar mit ihren Burgmannhöfen ist eine Reise wert. 
                            <br/>
                            <br/>
                        Einge Informationen können Sie hier finden:
                            <br/>
                             <a 
                             target="_blank" rel='noopener noreferrer'
                             href='https://www.horstmar.de/stadt_horstmar/' className='underline  text-blue-400'>Stadt Horstmar</a>
                            </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Markt</div>
                    <div className="timeline-content">
                        <h3>Unsere Markstände</h3>
                        <p>So tritt die Gerberei Vill auf Märkten und Volksfesten in Ihrer Nähe auf. Aktuelle Termine finden sie hier: 
                            <br/>
                            <br/>
                          <Link href='/markt'><a className='underline text-xl text-blue-400 font-bold'>Termine</a></Link>
                        </p>
                        <div className='pt-2 flex'>
                            <Image src={Stand} className='rounded-lg' alt='Markt Aufnahme von der Seite'/>
                            <div className='pl-2 flex'>
                             <Image src={StandT} className='rounded-lg' alt='Markt Aufnahme mit der Familie Vill'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</div>
  )
}

export default Timeline