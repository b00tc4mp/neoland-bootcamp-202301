import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../Context'
import retrieveContract from '../logic/retrieve-contract'
import retrieveUser from '../logic/retrieve-user'
import retrieveAdminUser from '../logic/retrieve-admin-user'
import Container from '../library/Container'
import Button from '../library/Button'
import { Document, Page, Text, View, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'

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

    return (
        <footer className='mt-20'>
            <PDFDownloadLink
                document={
                    <Document>
                        <Page>
                            <View>
                                <Text>HOLA MUNDO</Text>
                            </View>
                        </Page>
                    </Document>
                }
                fileName='holaMundo.pdf'>
                <button variant="info">Descargar PDF</button>
            </PDFDownloadLink>
        </footer>
    )
}

export default ContractDetail
