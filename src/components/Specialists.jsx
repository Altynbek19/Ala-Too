import React from "react";
import spec1 from '../assets/spec1.svg'
import './specialists.css'

export default function Specailists() {
    return (
        <div className="specialists">
            <h1>СПЕЦИАЛЬНОСТИ</h1>
            <div className="spec-part1">
                <div className="specialist">
                    <div className="specialist-header">
                        <img src={spec1} alt="" />
                        <div className="specialist-title">ПОВТ — </div>
                    </div>
                    <div className="specialist-content">
                    набор программных приложений, управляющие функционированием компьютерного оборудования или автоматизированных систем.
                    </div>
                </div>
                <div className="specialist">
                    <div className="specialist-header">
                        <img src={spec1} alt="" />
                        <div className="specialist-title">Экономика —  </div>
                    </div>
                    <div className="specialist-content">
                    совокупность наук о ведении хозяйства, вид социальной науки, изучающий взаимоотношение людей в процессе производства, потребления, распределения и обмена товаров или услуг.
                    </div>
                </div>
                <div className="specialist">
                    <div className="specialist-header">
                        <img src={spec1} alt="" />
                        <div className="specialist-title">Маркетинг — </div>
                    </div>
                    <div className="specialist-content">
                    продвижение продуктов и  чего хотят потребители, как удовлетворить их потребности, и продать им продукт, чтобы получить прибыль.
                    </div>
                </div>
            </div>
            <div className="spec-part2">
                <div className="specialist">
                    <div className="specialist-header">
                        <img src={spec1} alt="" />
                        <div className="specialist-title">Комп. системы
и комплексы  — </div>
                    </div>
                    <div className="specialist-content">
                    система, связанных между собой компьютеров, периферийных устройств, а также приборов, оснащенных микропроцессорными устройствами.
                    </div>
                </div>
                <div className="specialist">
                    <div className="specialist-header">
                        <img src={spec1} alt="" />
                        <div className="specialist-title">Графический дизайн — </div>
                    </div>
                    <div className="specialist-content">
                    художественно-
                    проектная деятельность по созданию гармоничной и эффективной визуально-коммуникационной среды.
                    </div>
                </div>
            </div>
        </div>
    )
}