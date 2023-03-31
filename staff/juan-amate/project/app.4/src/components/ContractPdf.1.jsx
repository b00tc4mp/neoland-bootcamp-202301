import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../Context'
import retrieveContract from '../logic/retrieve-contract'
import retrieveUser from '../logic/retrieve-user'
import retrieveAdminUser from '../logic/retrieve-admin-user'
import Button from '../library/Button'
import { Document, Page, Text, View, PDFDownloadLink } from '@react-pdf/renderer'

function ContractPdf() {
    console.log('ContractPdf -> render')

    const { alert } = useContext(Context)

    const [contract, setContract] = useState()
    const [user, setUser] = useState()
    const [admin, setAdmin] = useState()

    const params = useParams()

    const { contractId } = params

    const loadContract = () => {
        try {
            retrieveContract(sessionStorage.token, contractId, (error, contract) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setContract(contract)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const loadUser = () => {
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setUser(user)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const loadAdmin = () => {
        try {
            retrieveAdminUser(sessionStorage.token, (error, admin) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setAdmin(admin)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        loadContract()
        loadUser()
        loadAdmin()
    }, [])

    if (contract && admin) {
        const eventTime = new Date(contract.eventDate).toTimeString().slice(0, 5)
        const eventDate = new Date(contract.eventDate)
        const contractDate = new Date(contract.date).toLocaleDateString()
        let secondPaymentDate = new Date(eventDate).getTime() - (6 * 24 * 60 * 60 * 1000)
        secondPaymentDate = new Date(secondPaymentDate).toLocaleDateString()
        let deadlineDate = new Date(eventDate).getTime() + (45 * 24 * 60 * 60 * 1000)
        deadlineDate = new Date(deadlineDate).toLocaleDateString()

        const totalPrice = (contract.services?.reduce((acc, item) => acc + item.price, 0))
        const firstPayment = (totalPrice * 0.30)
        const secondPayment = (totalPrice * 0.35)
        const thirdPayment = (totalPrice * 0.35)
        const vatPrice = (totalPrice * 0.21)
        const subPrice = (totalPrice - vatPrice)

        return <PDFDownloadLink
            document={
                <Document>
                    <Page
                        size='A4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', backgroundColor: 'white' }}>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: '20px', wordBreak: 'keep-all' }}>
                            <Image style={{ width: '600px', height: '116px', marginTop: '40px' }} src='../../images/cabecera.png' alt='header image' />
                            <Text style={{ color: 'black', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '40px', marginHorizontal: '40px', textAlign: 'center' }}>together</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', backgroundColor: 'white', marginTop: '20px', wordBreak: 'keep-all' }}>
                            <Text style={{ color: 'black', fontSize: '12px', textAlign: 'left', marginHorizontal: '40px', marginTop: '60px', wordBreak: 'keep-all' }}>On the one hand {admin.name} with national id: {admin.nationalId} and registered office at {admin.address} - {admin.zipCode} - {admin.city} ({admin.province}), and phone: {admin.phone}. Hereinafter referred to as THE PHOTOGRAPHER.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'left',
                                marginHorizontal: '40px',
                                marginTop: '25px',
                                wordBreak: 'keep-all'
                            }}>And on the other hand {user.name}, of legal age, with national id: {user.nationalId} with address at {user.address} - {user.nationalId} - {user.city} ({user.province}); phone: {user.phone} and email: {user.email}; and {contract.coupleName}, of legal age, with national id: {contract.coupleId}, phone: {contract.couplePhone} and email: {contract.coupleEmail}; hereinafter referred to as THE CLIENTS.</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: '20px', wordBreak: 'keep-all' }}>
                            <Text style={{
                                color: 'black',
                                fontSize: '14px',
                                fontWeight: 'semibold',
                                textTransform: 'uppercase',
                                marginTop: '40px',
                                marginHorizontal: '40px',
                                textAlign: 'center'
                            }}>expose</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', backgroundColor: 'white', marginTop: '20px', wordBreak: 'keep-all' }}>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'left',
                                marginHorizontal: '40px',
                                marginTop: '50px',
                                wordBreak: 'keep-all'
                            }}>That THE CLIENTS are interested in contracting the professional services of THE PHOTOGRAPHER.
                            </Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'justify',
                                marginHorizontal: '40px',
                                marginTop: '25px',
                                wordBreak: 'keep-all'
                            }}>Said services consist of carrying out the Wedding report on the {eventDate.getDate()}/{eventDate.getMonth() + 1}/{eventDate.getFullYear()}, whose ceremony will be at {eventTime} hours of the day mentioned above, in {contract.ceremonyPlace.description} and whose subsequent banquet will take place at {contract.celebrationPlace.description}.</Text>
                        </View>
                    </Page>
                    <Page
                        size='A4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                        <Image style={{ width: '600px', height: '116px', marginTop: '30px' }} src='../../images/cabecera.png' alt='header image' />
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', backgroundColor: 'white' }}>
                            <Text style={{
                                color: 'black',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                marginTop: '80px',
                                marginBottom: '15px'
                            }}>
                                clauses
                            </Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', backgroundColor: 'white', marginTop: '20px', wordBreak: 'keep-all' }}>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                marginHorizontal: '40px',
                                marginTop: '40px'
                            }}>1. THE CLIENTS authorize THE PHOTOGRAPHER to take images by any technical means for the realization of their Wedding Report.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                marginHorizontal: '40px',
                                marginTop: '40px'
                            }}>2. THE CLIENTS authorize THE PHOTOGRAPHER to use the works solely and exclusively for promotional purposes such as the website owned by THE PHOTOGRAPHER and/or social networks. The commercialization of such works without the express authorization of THE CLIENTS is expressly prohibited.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                marginHorizontal: '40px',
                                marginTop: '40px'
                            }}>3. According to the intellectual property law, the use of the works by THE CLIENTS is private, and they cannot market, reproduce, transform, publish, transfer them to third parties, etc... without the express authorization of THE PHOTOGRAPHER.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                marginHorizontal: '40px',
                                marginTop: '40px'
                            }}>4. When the development of the contracted activity in certain places requires obtaining permits or authorizations, it will be up to the client to manage their prior obtaining, as well as the payment of fees or royalties, if any.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                marginHorizontal: '40px',
                                marginTop: '40px',
                                marginBottom: '40px'
                            }}>5. For any claim, the parties submit to the Courts and Tribunals of {admin.city}.</Text>

                        </View>
                    </Page>
                    <Page
                        size='A4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                        <Image style={{ width: '600px', height: '116px', marginTop: '30px' }} src='../../images/cabecera.png' alt='header image' />
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', backgroundColor: 'white' }}></View>
                        <Text style={{
                            color: 'black',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            marginTop: '30px'
                        }}>
                            obligations of the parties
                        </Text>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 10 }}>
                            <Text style={{
                                color: 'black',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                textTransform: 'capitalize',
                                marginTop: '14px'
                            }}>
                                the clients
                            </Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'justify',
                                marginHorizontal: '30px',
                                marginTop: '30px'
                            }}>1. The total amount of the budget is {totalPrice} euros. Clients are obliged to pay the entire attached budget as follows:</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                marginHorizontal: '30px',
                                marginTop: '30px'
                            }}>First payment:</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'center',
                                marginHorizontal: '30px',
                                marginTop: '10px'
                            }}>{firstPayment} euros at the SIGNING OF THIS AGREEMENT</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                marginHorizontal: '30px',
                                marginTop: '30px'
                            }}>Second payment:</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'center',
                                marginHorizontal: '30px',
                                marginTop: '10px'
                            }}>{secondPayment} euros on {secondPaymentDate}</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                marginHorizontal: '30px',
                                marginTop: '30px'
                            }}>Third payment:</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'center',
                                marginHorizontal: '30px',
                                marginTop: '10px'
                            }}>{thirdPayment} euros on {deadlineDate}</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                marginHorizontal: '30px',
                                marginTop: '30px'
                            }}>Date of delivery:</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'center',
                                marginHorizontal: '30px',
                                marginTop: '10px'
                            }}>The gallery with the photos will be sent on {deadlineDate}</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'justify',
                                marginHorizontal: '30px',
                                marginTop: '30px'
                            }}>*In the event that THE CLIENTS have contracted a book or album, this will be sent once the client has accepted the design and the price of the third payment has been received.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'justify',
                                marginHorizontal: '30px',
                                marginTop: '20px'
                            }}>Once the report is done, THE CLIENTS agree to pay it in full even if they have personal disagreements between them. Failure to comply with the payment obligations assumed with this contract will cause the initiation of the corresponding judicial claim of the debt.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '12px',
                                textAlign: 'justify',
                                marginHorizontal: '30px',
                                marginTop: '20px'
                            }}>  ** Payments will be made by bank transfer to the number of account listed below:</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '15px',
                                fontWeight: 'semibold',
                                textTransform: 'uppercase',
                                marginTop: '30px',
                                marginBottom: '40px'
                            }}>
                                YOUR BANK DETAILS
                            </Text>
                        </View>
                    </Page>
                    <Page
                        size='A4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                        <Image style={{ width: '600px', height: '116px', marginTop: '30px' }} src='../../images/cabecera.png' alt='header image' />
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 10 }}>
                            <Text style={{
                                color: 'black',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                marginTop: '30px',
                            }}>
                                obligations of the parties
                            </Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '20px'
                            }}>2. CLIENTS have FIVE days from the delivery of the work to, where appropriate, express their disagreement in writing with respect to the work delivered, after which it will be understood as accepted.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '20px'
                            }}>3. THE CLIENTS agree to provide the photographer/s that cover the event with lunch or dinner, not having to consist of a menu, or service equal to that of the guests. If the food is not provided, THE PHOTOGRAPHER will have to leave the premises to eat and will be absent for 1 hour from the event, without this circumstance implying a discount on the agreed price.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                textTransform: 'capitalize',
                                marginTop: '14px'
                            }}>
                                the photographer
                            </Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '20px'
                            }}>1. Photographic style. CUSTOMERS accept the photography style developed by THE PHOTOGRAPHER and declares to know and assume it. Recognize that it is a photojournalistic style and accept the style that at that time shows on its website and social networks.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '30px'
                            }}>2. Photo retouching. THE PHOTOGRAPHER highly processes all the photographs to achieve the characteristic final look of his photographic style, which consists of working on the light, tones and composition of each photograph, but in no case will skin retouching be carried out.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '20px'
                            }}>3. Album design. The design and finish of the album is unique and personal to THE PHOTOGRAPHER with the laboratory that he works at that time and will be displayed on the web at the time of signing the contract. The design of the album seeks elegance, simplicity and robustness, so that it does not go out of style over the years and that the photographs are displayed in the most impressive way and at the highest quality. The design of the layout with neutral backgrounds (mainly white) without ornaments, shadows or other elements, is the hallmark of THE PHOTOGRAPHER and no other type of layout will be made as it is in contrast to the style of the images obtained and the final result. Likewise, the album may NOT include photographs that have not been taken by THE PHOTOGRAPHER.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '20px',
                                marginBottom: '40px'
                            }}>4. Substitution of the photographer. If for any cause of force majeure (illness or accident), THE PHOTOGRAPHER assigned cannot attend the contracted day, the latter may carry out the corresponding substitution or, if the client wishes, THE PHOTOGRAPHER will refund the entire amount received until now.</Text>
                        </View>
                    </Page>
                    <Page
                        size='A4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                        <Image style={{ width: '600px', height: '116px', marginTop: '20px' }} src='../../images/cabecera.png' alt='header image' />
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginHorizontal: '10px', padding: 10 }}>
                            <Text style={{
                                color: 'black',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                marginTop: '30px',

                            }}>
                                obligations of the parties
                            </Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '20px'
                            }}>A.  For its part, THE PHOTOGRAPHER undertakes and undertakes to carry out the Wedding Report under the conditions and terms agreed with THE CLIENTS, both in those related to the quality of the material and in the established times.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '20px'
                            }}>B.  It´s the responsibility of THE PHOTOGRAPHER to maintain and preserve the files resulting from the work carried out, up to a maximum of TWELVE MONTHS from the completion of the work. After this time, THE PHOTOGRAPHER reserves the right to delete said files without prejudice.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '20px'
                            }}>C.  In the event of NO CELEBRATION OF THE EVENT AND/OR CANCELLATION of all or part of the budget accepted by THE CLIENTS, THE PHOTOGRAPHER will not return the amount paid as the first payment in any case. In the event that the CANCELLATION OF THE EVENT is made three months or less before the date of the event, THE CLIENTS must also pay the second payment.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '20px'
                            }}>D.  Due to the COVID-19 PANDEMIC and given the situation of general instability, THE PHOTOGRAPHER takes into consideration possible flexible scenarios that facilitate any date change for the client:</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '9px',
                                marginHorizontal: '50px',
                                marginTop: '20px'
                            }}>- If the new agreed date is canceled for a reason that is NOT within SERIOUS EMERGENCIES, THE PHOTOGRAPHER will NOT return the payments made so far by the client in the event of the loss of a complete job.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '9px',
                                marginHorizontal: '50px',
                                marginTop: '10px'
                            }}>- If the wedding is changed due to a SERIOUS EMERGENCY, THE PHOTOGRAPHER will search for a new available date to offer it to THE CLIENTS and try to arrange a new day for the wedding between both parties. At this point, if the work could not be carried out due to lack of availability of THE PHOTOGRAPHER, he will offer a substitute or, in the second instance, a bonus equivalent to the total of the first payment for THE CLIENTS to use for one year in other services (sessions, copies and albums).</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '9px',
                                marginHorizontal: '50px',
                                marginTop: '10px'
                            }}>- Even so, if THE CLIENTS decide to cancel the contract, regardless of whether the decision is due to a SERIOUS EMERGENCY or not, THE PHOTOGRAPHER WILL NOT return the amount paid so far, since several possibilities of changing the date will always have been offered.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '9px',
                                marginHorizontal: '50px',
                                marginTop: '10px'
                            }}>* SERIOUS EMERGENCIES. This category includes serious injuries or illnesses (of one of the contracting parties), or of their closest relatives (father, mother, children or siblings), or force majeure. If required by the injured party, the pertinent documentation (in written form), causing the emergency (medical report or legal document that attests it) will be presented.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '20px'
                            }}>F.  THE PHOTOGRAPHER undertakes, by signing this contract, to respect each and every one of the items contracted by THE CLIENTS in the budget.</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '20px',
                                marginBottom: '40px'
                            }}>G. In case of rejection, by THE CLIENTS, of any of the budget services, they will not receive from THE PHOTOGRAPHER, economic consideration or discount.</Text>
                        </View>
                    </Page>
                    <Page
                        size='A4' style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
                        <Image style={{ width: '600px', height: '116px', marginTop: '20px' }} src='../../images/cabecera.png' alt='header image' />
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginHorizontal: '10px', padding: 10 }}>
                            <Text style={{
                                color: 'black',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                marginTop: '30px',

                            }}>
                                budget of the contracted services
                            </Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', backgroundColor: 'white', marginHorizontal: '40px', padding: 10 }}>
                            <Text style={{
                                color: 'black',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                textTransform: 'capitalize',
                                marginTop: '5px',
                                marginBottom: '10px'
                            }}>
                                services:
                            </Text>
                        </View>
                        <View style={{
                            color: 'black',
                            fontSize: '11px',
                            marginHorizontal: '30px',
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'start',
                            backgroundColor: 'white',
                            marginHorizontal: '80px'
                        }}>{contract.services.map(service => {
                            return (
                                <Text style={{
                                    color: 'black',
                                    fontSize: '11px',
                                    marginHorizontal: '0px',
                                    marginTop: '3px'
                                }}>· {service.name}</Text>
                            )
                        })}
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', backgroundColor: 'white', marginHorizontal: '10px', padding: 10 }}>
                            <Text style={{
                                color: 'black',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                marginHorizontal: '30px',
                                marginTop: '20px'
                            }}>Full wedding coverage incluides the following events:</Text>
                        </View>
                        <View style={{
                            color: 'black',
                            fontSize: '11px',
                            marginHorizontal: '30px',
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'start',
                            backgroundColor: 'white',
                            marginHorizontal: '80px'
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px'
                            }}>· Preparations of the bride and the groom</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px'
                            }}>· Arrival at the place of the ceremony of guests and bride and groom</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px'
                            }}>· Ceremony</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px'
                            }}>· Group photos</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px'
                            }}>· Cocktail and entrance to the restaurant</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px'
                            }}>· Cake, coffee, gifts... ambient photos</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px'
                            }}>· Preparations of the bride and the groom</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px'
                            }}>· Dance and after party (60 minutes approx.)</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', backgroundColor: 'white', marginHorizontal: '10px', padding: 10 }}>
                            <Text style={{
                                color: 'black',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                marginHorizontal: '30px',
                                marginTop: '10px'
                            }}>The agreed price for this work amounts to to the amount of {totalPrice} euros broken down as follows:</Text>
                        </View>
                        <View style={{
                            color: 'black',
                            fontSize: '11px',
                            marginHorizontal: '30px',
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'start',
                            backgroundColor: 'white',
                            marginHorizontal: '80px'
                        }}>
                            {contract.services.map(service => {
                                return (
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '0px',
                                        marginTop: '3px'
                                    }}>· {service.name} - {service.price} euros</Text>
                                )
                            })}
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginHorizontal: '10px', padding: 10 }}>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '30px'
                            }}>Subtotal:  {subPrice} euros</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '5px'
                            }}>21% VAT:  {vatPrice} euros</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '5px'
                            }}>TOTAL:  {totalPrice} euros</Text>
                        </View>


                    </Page>
                    <Page
                        size='A4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                        <Image style={{ width: '600px', height: '116px', marginTop: '20px' }} src='../../images/cabecera.png' alt='header image' />
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginHorizontal: '10px', padding: 10 }}>
                            <Text style={{
                                color: 'black',
                                fontSize: '15px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                marginTop: '40px',
                                marginBottom: '10px'
                            }}>
                                data protection clause
                            </Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '30px'
                            }}>In accordance with the provisions of the current regulations on Protection of Personal Data, the data provided will be incorporated into the treatment system owned by (YOUR NAME AND SURNAME), in order to attend to the necessary communication for the provision of services contracted, as well as the preparation of the corresponding invoice and compliance with fiscal and commercial obligations. Said data will be kept for the period strictly necessary to comply with the precepts mentioned above.
                            </Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '20px'
                            }}>However, clients may exercise the rights of access, rectification, limitation of treatment, deletion, portability and opposition to the treatment of their personal data as well as the consent given for the treatment of the same, directing their request to the indicated postal address above or to the email {admin.email}, and may also contact the competent Control Authority to present the claim that it deems appropriate.
                            </Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '20px'
                            }}>THE CLIENTS authorize the transfer of their personal data to the environment of the collaborating team of THE PHOTOGRAPHER so that they can communicate with each other and prepare the event in accordance with the agreement.
                            </Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '80px'
                            }}>In {admin.city}, on {contractDate}</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '100px'
                            }}>|____________________| - |____________________| - |____________________|</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: '11px',
                                marginHorizontal: '30px',
                                marginTop: '5px'
                            }}>{user.name} - {contract.coupleName} - {admin.name}</Text>
                        </View>
                    </Page>
                </Document>
            }
            fileName='Contract.pdf' >
            <Button variant='info'>Descargar PDF</Button>
        </PDFDownloadLink >
    }
}
export default ContractPdf

