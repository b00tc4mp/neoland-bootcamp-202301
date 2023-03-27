import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../Context'
import retrieveContract from '../logic/retrieve-contract'
import retrieveUser from '../logic/retrieve-user'
import retrieveAdminUser from '../logic/retrieve-admin-user'
import { Document, Page, Text, View, Image, PDFViewer } from '@react-pdf/renderer'

function ContractPdf() {
    console.log('ContractPdf -> render')

    return <PDFViewer style={{ width: '100%', height: '90vh', marginTop: '100px' }}>
        <Document>
            <Page size='A4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: '20px', wordBreak: 'keep-all' }}>
                    <Text>HOLA MUNDO</Text>
                </View>
            </Page>
        </Document>
    </PDFViewer>
}

export default ContractPdf
