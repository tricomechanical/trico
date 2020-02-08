import { Component, OnInit } from '@angular/core';
import CustomerReferences from '../../../assets/data/customer-references.json';
import { CustomerReference, GroupedCustomerReference } from 'src/app/models/CustomerReference.js';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  public references: GroupedCustomerReference[];

  constructor() { }

  /**
   * Calls to get all customer references and sorts them by company name
   *
   * @memberof ReferencesComponent
   */
  public ngOnInit(): void {
    this.references = this.getReferencesByName(CustomerReferences).sort((refA, refB) => {
      return refA.name.localeCompare(refB.name);
    });
  }

  /**
   * Gets all customer references and groups them by company
   *
   * @private
   * @param {CustomerReference[]} references
   * @returns {GroupedCustomerReference[]}
   * @memberof ReferencesComponent
   */
  private getReferencesByName(references: CustomerReference[]): GroupedCustomerReference[] {
    const newRefs: GroupedCustomerReference[] = [];

    references.forEach((ref: CustomerReference) => {
      let foundMatch: boolean = false;
      for (const newRef of newRefs) {
        if (newRef.name === ref.name) {
          newRef.locations.push({
            location: ref.location,
            notes: ref.notes
          });
          foundMatch = true;
          break;
        }
      }

      if (!foundMatch) {
        newRefs.push({
          name: ref.name,
          locations: [{
            location: ref.location,
            notes: ref.notes
          }]
        });
      }
    });

    return newRefs;
  }
}
