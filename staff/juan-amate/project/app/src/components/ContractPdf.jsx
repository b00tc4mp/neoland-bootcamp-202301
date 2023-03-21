import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../Context'
import retrieveContract from '../logic/retrieve-contract'
import retrieveUser from '../logic/retrieve-user'
import retrieveAdminUser from '../logic/retrieve-admin-user'
import Container from '../library/Container'
import Button from '../library/Button'
import { Document, Page, Text, View, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'

function ContractPdf() {
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
            <PDFDownloadLink
                document={
                    <Document>
                        <Page
                            size='A4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 10 }}>
                                <Text style={{
                                    color: 'black',
                                    fontSize: '20px',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    marginTop: '40px',
                                    marginBottom: '25px'
                                }}>
                                    contract provision of services
                                </Text>
                                <Text style={{
                                    color: 'black',
                                    fontSize: '15px',
                                    fontWeight: 'semibold',
                                    textTransform: 'uppercase',
                                    marginTop: '40px',
                                    marginBottom: '25px'
                                }}>
                                    together
                                </Text>
                                <Text style={{ color: 'black', fontSize: '12px', textAlign: 'left', marginHorizontal: '30px', marginTop: '40px' }}>On the one hand {admin.name} with national id: {admin.nationalId} and registered office at {admin.address} - {admin.zipCode} - {admin.city} ({admin.province}), and phone: {admin.phone}. Hereinafter referred to as THE PHOTOGRAPHER.</Text>
                                <Text style={{
                                    color: 'black',
                                    fontSize: '12px',
                                    textAlign: 'justify',
                                    marginHorizontal: '30px',
                                    marginTop: '40px'
                                }}>And on the other hand {user.name}, of legal age, with national id: {user.nationalId} with address at {user.address} - {user.nationalId} - {user.city} ({user.province}); phone: {user.phone} and email: {user.email}; and {contract.coupleName}, of legal age, with national id: {contract.coupleId}, phone: {contract.couplePhone} and email: {contract.coupleEmail}; hereinafter referred to as THE CLIENTS.
                                </Text>
                                <Text style={{
                                    color: 'black',
                                    fontSize: '15px',
                                    fontWeight: 'semibold',
                                    textTransform: 'uppercase',
                                    marginTop: '40px',
                                    marginBottom: '25px'
                                }}>
                                    expose
                                </Text>
                                <Text style={{
                                    color: 'black',
                                    fontSize: '12px',
                                    textAlign: 'justify',
                                    marginHorizontal: '30px',
                                    marginTop: '40px'
                                }}>That THE CLIENTS are interested in contracting the professional services of THE PHOTOGRAPHER.
                                </Text>
                                <Text style={{
                                    color: 'black',
                                    fontSize: '12px',
                                    textAlign: 'justify',
                                    marginHorizontal: '30px',
                                    marginTop: '40px'
                                }}>Said services consist of carrying out the Wedding report on the {eventDate.getDate()}/{eventDate.getMonth() + 1}/{eventDate.getFullYear()}, whose ceremony will be at {eventTime} hours of the day mentioned above, in {contract.ceremonyPlace.description} and whose subsequent banquet will take place at {contract.celebrationPlace.description}.</Text>
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
                                    marginTop: '40px',
                                    marginBottom: '25px'
                                }}>
                                    clauses
                                </Text>
                                <Text style={{
                                    color: 'black',
                                    fontSize: '12px',
                                    textAlign: 'justify',
                                    marginHorizontal: '30px',
                                    marginTop: '40px',
                                    listStyleType: 'decimal'
                                }}>THE CLIENTS authorize THE PHOTOGRAPHER to take images by any technical means for the realization of their Wedding Report.</Text>
                            </View>
                        </Page>
                    </Document>
                }
                fileName='holaMundo.pdf'>
                <button variant='info' className='px-4 py-2 bg-yellow-600 text-white rounded-3xl text-sm font-roboto font-semibold cursor-pointer'>Descargar PDF</button>
            </PDFDownloadLink>
        )

    }

    export default ContractPdf

