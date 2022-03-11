import React from 'react'
import jsPDF from 'jspdf'
export default function DownloadPDF(props) {
    function generatePDF() {
        var doc = new jsPDF('', 'px', 'a4', 'false')

        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();

        // maxWidth lines
        doc.setDrawColor(255, 0, 0);
        doc.rect(width * .2, 20, width * .6, 65); // empty square

        doc.text(width * .15, 35, 'DECLARATION DE NON CONDAMNATION EN APPLICATION DE L’ARTICLE A.123 - 51 du Code de commerce.', {
            maxWidth: width * .65,
            align: 'justify'
        });
        doc.text(20, 90, 'Je soussigné(e) :  ' + props.content)
        doc.text(20, 120, 'Né (e) le :  ' + props.content)
        doc.text(20, 150, 'à:' + props.content)
        doc.text(20, 180, 'de(nom et prénoms du père) : ' + props.content)
        doc.text(20, 210, 'et de(nom et prénoms de la mère) : ' + props.content)
        doc.text(20, 240, 'demeurant: ' + props.content)

        doc.text(20, 270, 'Déclare sur l’honneur, conformément aux dispositions de l’article A.123 - 51 du Code de commerce, n’avoir fait l’objet d’aucune condamnation pénale ni de sanction civile ou administrative de nature à m’interdire – soit d’exercer une activité commerciale – soit de gérer, d’administrer ou de diriger une personne morale.')

        doc.text(20, 300, 'Fait à: ')
        doc.text(20, 330, 'Le: ')
        doc.text(20, 360, 'SIGNATURE: ')

        doc.addPage();

        doc.text('Rappel: Article L123 - 5 du code de commerce', null, null, null, null, 'center');
        doc.text(20, 60, '(Ordonnance n°2000 - 916 du 19 septembre 2000 art. 3 Journal Officiel du 22 septembre 2000 en vigueur le 1er janvier 2002)')
        doc.text(20, 90, 'Le fait de donner, de mauvaise foi, des indications inexactes ou incomplètes en vue d’une immatriculation, d’une radiation ou d’une mention complémentaire ou rectificative au registre du commerce et des sociétés est puni d’une amende de 4500 euros et d’un emprisonnement de six mois')
        doc.text(20, 120, 'Les dispositions des alinéas deux et trois de l’article L.123 - 4 sont applicables dans les cas prévus au présent article.')
        doc.text(20, 150, 'Le tribunal peut, en outre, priver l\'intéressé, pendant un temps qui n\'excédera pas cinq ans, du droit de vote et d\'éligibilité aux élections des tribunaux de commerce, chambres de commerce et d\'industrie territoriales et conseils de prud\'hommes.')
        doc.text(20, 180, 'Le tribunal ordonne que l\'immatriculation, les mentions ou la radiation devant figurer au registre du commerce et des sociétés y seront portées dans un délai déterminé, à la requête de l\'intéressé.')

        doc.save("Test.pdf");
    }
    return (
        <button
            onClick={generatePDF}
            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            DownloadPDF
        </button>
    )
}
