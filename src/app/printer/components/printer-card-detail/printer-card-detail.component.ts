import { Component, Input } from '@angular/core';
import { PrinterDetail } from '../../interfaces/printer-detail.interfaces';

@Component({
  selector: 'printer-card-detail',
  templateUrl: './printer-card-detail.component.html',
  styleUrl: './printer-card-detail.component.css'
})
export class PrinterCardDetailComponent {

    @Input() printer!: PrinterDetail;


    basicData: any;

    basicOptions: any;

    

    ngOnInit() {

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.basicData = {
            labels: ['Black', 'Cyan', 'Magenta', 'Yellow'],
            datasets: [
                {
                    label: 'Nivel de Toner',
                    data: [
                        this.printer.printerLevelOids[0].value,
                        this.printer.printerLevelOids[1].value,
                        this.printer.printerLevelOids[2].value,
                        this.printer.printerLevelOids[3].value
                    ],
                    backgroundColor: ['#000000', '#00ffff', '#ff00ff', '#ffff00'],
                    borderColor: ['#000000', '#00ffff', '#ff00ff', '#ffff00'],
                    borderWidth: 1
                }
            ]
        };

        this.basicOptions = {
        maintainAspectRatio: true,
        aspectRatio: 1.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
}

}
