import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../Context'
import retrieveContract from '../logic/retrieve-contract'
import retrieveUser from '../logic/retrieve-user'
import retrieveAdminUser from '../logic/retrieve-admin-user'
import Container from '../library/Container'
import Button from '../library/Button'
import { Document, Page, Text, View, Image, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'

function ContractDetail() {
    console.log('ContractDetail -> render')

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

        return (
            <Container className='w-screen mt-28 mb-4 gap-4'>
                <PDFDownloadLink
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
                                    marginTop: '30px',
                                    marginBottom: '20px'
                                }}>
                                    obligations of the parties
                                </Text>
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 10 }}>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        textTransform: 'capitalize',
                                        marginTop: '30px',
                                        marginBottom: '20px'
                                    }}>
                                        the clients
                                    </Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'justify',
                                        marginHorizontal: '30px',
                                        marginTop: '40px'
                                    }}>1. The total amount of the budget is {totalPrice} euros. Clients are obliged to pay the entire attached budget as follows:</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'center',
                                        marginHorizontal: '30px',
                                        marginTop: '40px'
                                    }}>First payment:</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'center',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>{firstPayment} euros at the SIGNING OF THIS AGREEMENT</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'center',
                                        marginHorizontal: '30px',
                                        marginTop: '40px'
                                    }}>Second payment:</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'center',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>{secondPayment} euros on {secondPaymentDate}</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'center',
                                        marginHorizontal: '30px',
                                        marginTop: '40px'
                                    }}>Third payment:</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'center',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>{thirdPayment} euros on {deadlineDate}</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'center',
                                        marginHorizontal: '30px',
                                        marginTop: '40px'
                                    }}>Date of delivery:</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'center',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>The gallery with the photos will be sent on {deadlineDate}</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'justify',
                                        marginHorizontal: '30px',
                                        marginTop: '40px'
                                    }}>*In the event that THE CLIENTS have contracted a book or album, this will be sent once the client has accepted the design and the price of the third payment has been received.</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'justify',
                                        marginHorizontal: '30px',
                                        marginTop: '40px'
                                    }}>Once the report is done, THE CLIENTS agree to pay it in full even if they have personal disagreements between them. Failure to comply with the payment obligations assumed with this contract will cause the initiation of the corresponding judicial claim of the debt.</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'justify',
                                        marginHorizontal: '30px',
                                        marginTop: '40px'
                                    }}>  ** Payments will be made by bank transfer to the number of account listed below:</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '15px',
                                        fontWeight: 'semibold',
                                        textTransform: 'uppercase',
                                        marginTop: '30px',
                                        marginBottom: '20px'
                                    }}>
                                        YOUR BANK DETAILS
                                    </Text>
                                </View>
                            </Page>
                            <Page
                                size='A4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 10 }}>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '15px',
                                        fontWeight: 'semibold',
                                        textTransform: 'uppercase',
                                        marginTop: '30px',
                                        marginBottom: '20px'
                                    }}>
                                        obligations of the parties
                                    </Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'justify',
                                        marginHorizontal: '30px',
                                        marginTop: '40px'
                                    }}>2. CLIENTS have FIVE days from the delivery of the work to, where appropriate, express their disagreement in writing with respect to the work delivered, after which it will be understood as accepted.</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'justify',
                                        marginHorizontal: '30px',
                                        marginTop: '40px'
                                    }}>3. THE CLIENTS agree to provide the photographer/s that cover the event with lunch or dinner, not having to consist of a menu, or service equal to that of the guests. If the food is not provided, THE PHOTOGRAPHER will have to leave the premises to eat and will be absent for 1 hour from the event, without this circumstance implying a discount on the agreed price.</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '15px',
                                        fontWeight: 'semibold',
                                        textTransform: 'capitalize',
                                        marginTop: '30px',
                                        marginBottom: '20px'
                                    }}>
                                        the photographer
                                    </Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'justify',
                                        marginHorizontal: '30px',
                                        marginTop: '40px'
                                    }}>1. Photographic style. CUSTOMERS accept the photography style developed by THE PHOTOGRAPHER and declares to know and assume it. Recognize that it is a photojournalistic style and accept the style that at that time shows on its website and social networks.</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'justify',
                                        marginHorizontal: '30px',
                                        marginTop: '40px'
                                    }}>2. Photo retouching. THE PHOTOGRAPHER highly processes all the photographs to achieve the characteristic final look of his photographic style, which consists of working on the light, tones and composition of each photograph, but in no case will skin retouching be carried out.</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'justify',
                                        marginHorizontal: '30px',
                                        marginTop: '40px'
                                    }}>3. Album design. The design and finish of the album is unique and personal to THE PHOTOGRAPHER with the laboratory that he works at that time and will be displayed on the web at the time of signing the contract. The design of the album seeks elegance, simplicity and robustness, so that it does not go out of style over the years and that the photographs are displayed in the most impressive way and at the highest quality. The design of the layout with neutral backgrounds (mainly white) without ornaments, shadows or other elements, is the hallmark of THE PHOTOGRAPHER and no other type of layout will be made as it is in contrast to the style of the images obtained and the final result. Likewise, the album may NOT include photographs that have not been taken by THE PHOTOGRAPHER.</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        textAlign: 'justify',
                                        marginHorizontal: '30px',
                                        marginTop: '40px'
                                    }}>4. Substitution of the photographer. If for any cause of force majeure (illness or accident), THE PHOTOGRAPHER assigned cannot attend the contracted day, the latter may carry out the corresponding substitution or, if the client wishes, THE PHOTOGRAPHER will refund the entire amount received until now.</Text>
                                </View>
                            </Page>
                            <Page
                                size='A4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Image style={{ width: '600px', height: '116px', marginTop: '20px' }} src='../../images/cabecera.png' alt='header image' />
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginHorizontal: '10px', padding: 10 }}>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '15px',
                                        fontWeight: 'semibold',
                                        textTransform: 'uppercase',
                                        marginTop: '20px',
                                        marginBottom: '10px'
                                    }}>
                                        obligations of the parties
                                    </Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>A. For its part, THE PHOTOGRAPHER undertakes and undertakes to carry out the Wedding Report under the conditions and terms agreed with THE CLIENTS, both in those related to the quality of the material and in the established times.</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>B. It´s the responsibility of THE PHOTOGRAPHER to maintain and preserve the files resulting from the work carried out, up to a maximum of TWELVE MONTHS from the completion of the work. After this time, THE PHOTOGRAPHER reserves the right to delete said files without prejudice.</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>C. In the event of NO CELEBRATION OF THE EVENT AND/OR CANCELLATION of all or part of the budget accepted by THE CLIENTS, THE PHOTOGRAPHER will not return the amount paid as the first payment in any case. In the event that the CANCELLATION OF THE EVENT is made three months or less before the date of the event, THE CLIENTS must also pay the second payment.</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>D. Due to the COVID-19 PANDEMIC and given the situation of general instability, THE PHOTOGRAPHER takes into consideration possible flexible scenarios that facilitate any date change for the client:</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '9px',
                                        marginHorizontal: '50px',
                                        marginTop: '10px'
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
                                    }}>F. THE PHOTOGRAPHER undertakes, by signing this contract, to respect each and every one of the items contracted by THE CLIENTS in the budget.</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>G. In case of rejection, by THE CLIENTS, of any of the budget services, they will not receive from THE PHOTOGRAPHER, economic consideration or discount.</Text>
                                </View>
                            </Page>
                            <Page
                                size='A4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                <Image style={{ width: '600px', height: '116px', marginTop: '20px' }} src='../../images/cabecera.png' alt='header image' />
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', backgroundColor: 'white', marginHorizontal: '10px', padding: 10 }}>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        marginTop: '10px',
                                        marginBottom: '5px'
                                    }}>
                                        budget of the contracted services
                                    </Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', backgroundColor: 'white', marginHorizontal: '10px', padding: 10 }}>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        textAlign: 'left',
                                        textTransform: 'capitalize',
                                        marginTop: '20px',
                                        marginBottom: '10px'
                                    }}>
                                        services:
                                    </Text>
                                    <View style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px'
                                    }}>
                                        {contract.services.map(service => {
                                            return (
                                                <Text style={{
                                                    color: 'black',
                                                    fontSize: '11px',
                                                    marginHorizontal: '30px',
                                                    marginTop: '5px'
                                                }}>{service.name}</Text>
                                            )
                                        })}
                                    </View>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '15px',
                                        fontWeight: 'bold',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>Full wedding coverage incluides the following events:</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>· Preparations of the bride and the groom</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>· Arrival at the place of the ceremony of guests and bride and groom</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>· Ceremony</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>· Group photos</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>· Cocktail and entrance to the restaurant</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>· Cake, coffee, gifts... ambient photos</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>· Preparations of the bride and the groom</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>· Dance and after party (60 minutes approx.)</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>The agreed price for this work amounts to to the amount of {totalPrice} euros broken down as follows:</Text>

                                    <View style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>
                                        {contract.services.map(service => {
                                            return (
                                                <Text style={{
                                                    color: 'black',
                                                    fontSize: '11px',
                                                    marginHorizontal: '30px',
                                                    marginTop: '20px'
                                                }}>· {service.name} - {service.price} euros</Text>
                                            )
                                        })}
                                    </View>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>Subtotal:  {subPrice} euros</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
                                    }}>21% VAT:    {vatPrice} euros</Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
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
                                        marginTop: '20px',
                                        marginBottom: '10px'
                                    }}>
                                        data protection clause
                                    </Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '15px',
                                        fontWeight: 'semibold',
                                        textTransform: 'capitalize',
                                        marginTop: '30px',
                                        marginBottom: '20px'
                                    }}>
                                        services:
                                    </Text>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: '11px',
                                        marginHorizontal: '30px',
                                        marginTop: '20px'
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
                                        marginTop: '20px'
                                    }}>In {admin.city}, on {contractDate}</Text>
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
                                        marginTop: '20px'
                                    }}>{user.name} - {contract.coupleName} - {admin.name}</Text>
                                </View>
                            </Page>
                        </Document>
                    }
                    fileName='Contract.pdf' >
                    <Button variant='info'>Descargar PDF</Button>
                </PDFDownloadLink >

                <div className='w-4/5 p-4 border rounded-xl'>
                    <img src='../../images/cabecera.png' alt='cabecera' />
                    <h3 className='mt-10 mb-5 text-center font-bold uppercase'>together</h3><br />
                    <p className='text-justify'>On the one hand <strong>{admin.name}</strong> with national id: <strong>{admin.nationalId}</strong> and registered office at <strong>{admin.address}</strong> - <strong>{admin.zipCode}</strong> - <strong>{admin.city} ({admin.province})</strong>, and phone: <strong>{admin.phone}</strong>. Hereinafter referred to as <strong>THE PHOTOGRAPHER</strong>.</p><br />
                    <p className='text-justify'>And on the other hand <strong>{user.name}</strong>, of legal age, with national id: <strong>{user.nationalId}</strong> with address at <strong>{user.address}</strong> - <strong>{user.nationalId}</strong> - <strong>{user.city} ({user.province})</strong>; phone: <strong>{user.phone}</strong> and email: <strong>{user.email}</strong>; and <strong>{contract.coupleName}</strong>, of legal age, with national id: <strong>{contract.coupleId}</strong>, phone: <strong>{contract.couplePhone}</strong> and email: <strong>{contract.coupleEmail}</strong>; hereinafter referred to as <strong>THE CLIENTS</strong>.</p><br />
                    <h3 className='mt-10 mb-5 text-center font-bold uppercase'>expose</h3><br />
                    <p>That THE CLIENTS are interested in contracting the professional services of THE PHOTOGRAPHER.</p>
                    <p>Said services consist of carrying out the Wedding report on the <strong>{eventDate.getDate()}/{eventDate.getMonth() + 1}/{eventDate.getFullYear()}</strong>, whose ceremony will be at <strong>{eventTime} hours</strong> of the day mentioned above, in <strong>{contract.ceremonyPlace.description}</strong> and whose subsequent banquet will take place at <strong>{contract.celebrationPlace.description}</strong>.
                    </p>
                </div><div className='w-4/5 p-4 border rounded-xl'>
                    <h3 className='mt-10 mb-5 text-center font-bold uppercase'>clauses</h3><br />
                    <ul className='mx-4 text-justify list-decimal'>
                        <li>THE CLIENTS authorize THE PHOTOGRAPHER to take images by any technical means for the realization of their Wedding Report.</li><br />
                        <li>THE CLIENTS authorize THE PHOTOGRAPHER to use the works solely and exclusively for promotional purposes such as the website owned by THE PHOTOGRAPHER and/or social networks. The commercialization of such works without the express authorization of THE CLIENTS is expressly prohibited.</li><br />
                        <li>According to the intellectual property law, the use of the works by THE CLIENTS is private, and they cannot market, reproduce, transform, publish, transfer them to third parties, etc... without the express authorization of THE PHOTOGRAPHER.</li><br />
                        <li>When the development of the contracted activity in certain places requires obtaining permits or authorizations, it will be up to the client to manage their prior obtaining, as well as the payment of fees or royalties, if any.</li><br />
                        <li>For any claim, the parties submit to the Courts and Tribunals of {admin.city}.</li><br />
                    </ul>
                </div><div className='w-4/5 p-4 border rounded-xl'>
                    <h3 className='mt-10 mb-5 text-center font-bold uppercase'>obligations of the parties</h3><br />
                    <h4 className='capitalize font-semibold'>the clients</h4><br />
                    <ul className='mx-4 text-justify list-decimal'>
                        <li>
                            <p>The total amount of the budget is <strong>{totalPrice} euros</strong>.</p><br />
                            <p>Clients are obliged to pay the entire attached budget as follows:</p><br />
                            <ul>
                                <li>First payment:</li>
                                <li><strong>{firstPayment} euros</strong> at the SIGNING OF THIS AGREEMENT</li><br />
                                <li>Second payment:</li>
                                <li><strong>{secondPayment} euros</strong> on <strong>{secondPaymentDate}</strong></li><br />
                                <li>Third payment:</li>
                                <li><strong>{thirdPayment} euros</strong> on <strong>{deadlineDate}</strong></li><br />
                                <li>Date of delivery:</li>
                                <li>The gallery with the photos will be sent on <strong>{deadlineDate}</strong></li><br />
                            </ul>
                            <div>
                                *In the event that THE CLIENTS have contracted a book or album, this will be sent once the client has accepted the design and the price of the third payment has been received.
                            </div><br />
                            <div>
                                Once the report is done, THE CLIENTS agree to pay it in full even if they have personal disagreements between them. Failure to comply with the payment obligations assumed with this contract will cause the initiation of the corresponding judicial claim of the debt.
                            </div><br />
                            <div>
                                ** Payments will be made by bank transfer to the number of
                                account listed below:
                            </div><br />
                            <h3 className='text-center font-semibold'>YOUR BANK DETAILS</h3>
                        </li><br />
                        <li>CLIENTS have FIVE days from the delivery of the work to, where appropriate, express their disagreement in writing with respect to the work delivered, after which it will be understood as accepted.</li><br />
                        <li>THE CLIENTS agree to provide the photographer/s that cover the event with lunch or dinner, not having to consist of a menu, or service equal to that of the guests. If the food is not provided, THE PHOTOGRAPHER will have to leave the premises to eat and will be absent for 1 hour from the event, without this circumstance implying a discount on the agreed price.</li><br />
                    </ul>
                </div><div className='w-4/5 p-4 border rounded-xl'>
                    <h4 className='capitalize font-bold'>the photographer</h4><br />
                    <ul className='mx-4 text-justify list-decimal'>
                        <li><strong>Photographic style.</strong> CUSTOMERS accept the photography style
                            developed by THE PHOTOGRAPHER and declares to know and
                            assume it. Recognize that it is a photojournalistic style and accept the style
                            that at that time shows on its website and social networks.
                        </li><br />
                        <li><strong>Photo retouching.</strong> THE PHOTOGRAPHER highly processes all the photographs to achieve the characteristic final look of his photographic style, which consists of working on the light, tones and composition of each photograph, but in no case will skin retouching be carried out.
                        </li><br />
                        <li><strong>Album design.</strong> The design and finish of the album is unique and personal to THE PHOTOGRAPHER with the laboratory that he works at that time and will be displayed on the web at the time of signing the contract. The design of the album seeks elegance, simplicity and robustness, so that it does not go out of style over the years and that the photographs are displayed in the most impressive way and at the highest quality. The design of the layout with neutral backgrounds (mainly white) without ornaments, shadows or other elements, is the hallmark of THE PHOTOGRAPHER and no other type of layout will be made as it is in contrast to the style of the images obtained and the final result. Likewise, the album may NOT include photographs that have not been taken by THE PHOTOGRAPHER.
                        </li><br />
                        <li><strong>Substitution of the photographer.</strong> If for any cause of force majeure (illness or accident), THE PHOTOGRAPHER assigned cannot attend the contracted day, the latter may carry out the corresponding substitution or, if the client wishes, THE PHOTOGRAPHER will refund the entire amount received until now.
                        </li><br />
                        <li>For its part, THE PHOTOGRAPHER undertakes and undertakes to carry out the Wedding Report under the conditions and terms agreed with THE CLIENTS, both in those related to the quality of the material and in the established times.</li><br />
                        <li>It´s the responsibility of THE PHOTOGRAPHER to maintain and preserve the files resulting from the work carried out, up to a maximum of TWELVE MONTHS from the completion of the work. After this time, THE PHOTOGRAPHER reserves the right to delete said files without prejudice.</li><br />
                        <li>In the event of NO CELEBRATION OF THE EVENT AND/OR CANCELLATION of all or part of the budget accepted by THE CLIENTS, THE PHOTOGRAPHER will not return the amount paid as the first payment in any case. In the event that the CANCELLATION OF THE EVENT is made three months or less before the date of the event, THE CLIENTS must also pay the second payment.</li><br />
                        <li>Due to the COVID-19 PANDEMIC and given the situation of general instability, THE PHOTOGRAPHER takes into consideration possible flexible scenarios that facilitate any date change for the client:</li><br />
                        <ul className='ml-8 list-disc'>
                            <li>If the new agreed date is canceled for a reason that is NOT within SERIOUS EMERGENCIES, THE PHOTOGRAPHER will NOT return the payments made so far by the client in the event of the loss of a complete job.</li><br />
                            <li>If the wedding is changed due to a SERIOUS EMERGENCY, THE PHOTOGRAPHER will search for a new available date to offer it to THE CLIENTS and try to arrange a new day for the wedding between both parties. At this point, if the work could not be carried out due to lack of availability of THE PHOTOGRAPHER, he will offer a substitute or, in the second instance, a bonus equivalent to the total of the first payment for THE CLIENTS to use for one year in other services (sessions, copies and albums).</li><br />
                            <li>Even so, if THE CLIENTS decide to cancel the contract, regardless of whether the decision is due to a SERIOUS EMERGENCY or not, THE PHOTOGRAPHER WILL NOT return the amount paid so far, since several possibilities of changing the date will always have been offered.</li><br />
                        </ul>
                        <p>* SERIOUS EMERGENCIES. This category includes serious injuries or illnesses (of one of the contracting parties), or of their closest relatives (father, mother, children or siblings), or force majeure. If required by the injured party, the pertinent documentation (in written form), causing the emergency (medical report or legal document that attests it) will be presented.</p><br />
                        <li>THE PHOTOGRAPHER undertakes, by signing this contract, to respect each and every one of the items contracted by THE CLIENTS in the budget.</li><br />
                        <li>In case of rejection, by THE CLIENTS, of any of the budget services, they will not receive from THE PHOTOGRAPHER, economic consideration or discount.</li><br />
                    </ul>
                </div><div className='w-4/5 p-4 border rounded-xl'>
                    <h3 className='mt-10 m-5 text-center font-bold uppercase'>budget of the contracted services</h3><br />
                    <p className='font-bold'>Services:</p><br />
                    <ul className='ml-8 list-disc'>
                        <ul>{contract.services?.map(item => {
                            return <li key={item.id} className='list-disc'>{item.name}</li>
                        })}</ul>
                    </ul><br />

                    <p className='font-bold'>Full wedding coverage incluides the following events:</p><br />
                    <ul className='ml-8 list-disc'>
                        <li>Preparations of the bride and the groom</li>

                        <li>Arrival at the place of the ceremony of guests and bride and groom.</li>

                        <li>Ceremony</li>

                        <li>Group photos</li>

                        <li>Couple session</li>

                        <li>Cocktail and entrance to the restaurant</li>

                        <li>Cake, coffee, gifts... ambient photos</li>

                        <li>Dance and after party (60 minutes approx.)</li>
                    </ul> <br />
                    <p className='font-bold'>The agreed price for this work amounts to
                        to the amount of {totalPrice} euros broken down as follows:</p><br />
                    <ul>{contract.services?.map(item => {
                        return <li key={item.id} className='list-disc ml-8'>{item.name} - {item.price} euros</li>
                    })}</ul><br />
                    <ul className='text-left ml-56'>
                        <li className='ml-10'>Subtotal:  {subPrice} euros</li>
                        <li className='ml-10'>21% VAT:    {vatPrice} euros</li><br />
                        <li className='ml-10 font-bold'>TOTAL:  {totalPrice} euros</li><br />
                    </ul>
                </div><div className='w-4/5 p-4 border rounded-xl'>
                    <h3 className='mt-10 mb-5 text-center font-bold uppercase'>data protection clause</h3><br />
                    <p className='text-justify'>In accordance with the provisions of the current regulations on Protection of Personal Data, the data provided will be incorporated into the treatment system owned by (YOUR NAME AND SURNAME), in order to attend to the necessary communication for the provision of services contracted, as well as the preparation of the corresponding invoice and compliance with fiscal and commercial obligations. Said data will be kept for the period strictly necessary to comply with the precepts mentioned above.</p><br />
                    <p className='text-justify'>However, clients may exercise the rights of access, rectification, limitation of treatment, deletion, portability and opposition to the treatment of their personal data as well as the consent given for the treatment of the same, directing their request to the indicated postal address above or to the email {admin.email}, and may also contact the competent Control Authority to present the claim that it deems appropriate.</p><br />

                    <p className='text-justify'>THE CLIENTS authorize the transfer of their personal data to the environment of the collaborating team of THE PHOTOGRAPHER so that they can communicate with each other and prepare the event in accordance with the agreement.</p><br />

                    <p className='text-center font-semibold'>In {admin.city}, on {contractDate}</p><br />

                    <p className='text-center'>FIRMS</p><br />
                    <div className='mb-2'>
                        <div>
                            <p className='text-center font-bold mx-5 mb-20'>The clients</p>
                            <p className='text-center font-semibold text-xs underline mb-2'>{user.name} - {contract.coupleName}</p>
                        </div>
                        <div>
                            <p className='text-center font-bold mx-5 mb-20'>The photographer</p>
                            <p className='text-center font-semibold text-xs underline mb-2'>{admin.name}</p>
                        </div>
                    </div>
                </div>


            </Container >
        )
    } else return <></>
}

export default ContractDetail

