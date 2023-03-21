import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../Context'
import retrieveContract from '../logic/retrieve-contract'
import retrieveUser from '../logic/retrieve-user'
import retrieveAdminUser from '../logic/retrieve-admin-user'
import { Document, Page, Text, View } from '@react-pdf/renderer'
import { PDFDocument } from '@react-pdf/renderer'

function DocuPdf() {
    console.log('DocuPdf -> render')

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

    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

    if (contract && admin) {
        // const eventTime = new Date(contract.eventDate).toTimeString().slice(0, 5)
        // const eventDate = new Date(contract.eventDate)
        // const contractDate = new Date(contract.date).toLocaleDateString()
        // let secondPaymentDate = new Date(eventDate).getTime() - (6 * 24 * 60 * 60 * 1000)
        // secondPaymentDate = new Date(secondPaymentDate).toLocaleDateString()
        // let deadlineDate = new Date(eventDate).getTime() + (45 * 24 * 60 * 60 * 1000)
        // deadlineDate = new Date(deadlineDate).toLocaleDateString()

        // const totalPrice = (contract.services?.reduce((acc, item) => acc + item.price, 0))
        // const firstPayment = (totalPrice * 0.30)
        // const secondPayment = (totalPrice * 0.35)
        // const thirdPayment = (totalPrice * 0.35)
        // const vatPrice = (totalPrice * 0.21)
        // const subPrice = (totalPrice - vatPrice)

        return (
            <Document>
                <Page
                    size="A4"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white",
                    }}
                >
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "white",
                            padding: 10,
                        }}
                    >
                        <Text style={{ color: "#3388af", fontSize: "42px" }}>
                            {user.name}
                        </Text>
                        <Text>Por {user.email}</Text>

                        <Text
                            style={{
                                color: "gray",
                                fontStyle: "italic",
                                fontSize: "10px",
                            }}
                        >
                            {lorem}
                        </Text>

                        <Text style={{ textAlign: "justify", marginTop: "22px" }}>
                            {contract ? contract.date : null}
                        </Text>
                    </View>
                </Page>
            </Document>
        );
    } else return <></>
}

export default DocuPdf
