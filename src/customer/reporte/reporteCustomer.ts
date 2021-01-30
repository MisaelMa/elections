import * as Excel from 'exceljs';
import { CustomerEntity } from '../customer.entity';

export class ReporteCustomer {
  async generate(data: CustomerEntity[]) {
    const workbook = new Excel.Workbook();
    workbook.views = [
      {
        x: 0, y: 0, width: 10000, height: 20000,
        firstSheet: 0, activeTab: 2, visibility: 'visible',
      },
    ];

    const personas = workbook.addWorksheet('Personas', {
      properties:
        {
          tabColor: {
            argb: '359c5b',
          },
        },
    });
    this.addPerson(personas, data);

    const result = await workbook.xlsx.writeBuffer({
        filename: (+new Date()).toString() + '.xlsx',
      },
    );
    const buffer = Buffer.from(result);
    const b64Encoding = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,';
    return b64Encoding + buffer.toString('base64');
  }

  addPerson(paymentsSheet: Excel.Worksheet, data: CustomerEntity[]) {
    const peopledata = [];
    data.forEach((peop) => {
      const transforms = [];
      transforms.push(peop.name + ' ' + peop.lastNameFather + '' + peop.lastNameMother);
      transforms.push(peop.clave);
      transforms.push(peop.phone);
      transforms.push(peop.direccion);
      transforms.push('typo');
      transforms.push(peop.state.name);
      transforms.push(peop.municipality.name);
      transforms.push(peop.zona.name);
      transforms.push(peop.section.name);
      transforms.push('');
      transforms.push(peop.facebook);
      transforms.push(peop.instagram);
      transforms.push(peop.twitter);
      transforms.push(peop.email);
      peopledata.push(transforms);
    });
    paymentsSheet.addTable({
      name: 'personas',
      ref: 'F1',
      totalsRow: true,
      style: {
        showColumnStripes: true,
      },
      columns: [
        { name: 'Nombre' },
        { name: 'Clave Elector' },
        { name: 'Telefono' },
        { name: 'Direccion' },
        { name: 'Tipo' },
        { name: 'Estado' },
        { name: 'Municipio' },
        { name: 'zona' },
        { name: 'seccion' },
        { name: 'Reclutador' },
        { name: 'facebook' },
        { name: 'instagram' },
        { name: 'twitter' },
        { name: 'email' },
      ],
      rows: peopledata,

    });

  }
}
