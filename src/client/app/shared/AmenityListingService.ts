/***************************************************************************
 *                                                                          *
 * The MIT License (MIT)                                                    *
 * Copyright (c) 2016 Khanh Nguyen                                          *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS  *
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF               *
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.   *
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY     *
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,     *
 * OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE             *
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.                   *                                           *
 *                                                                          *
 ***************************************************************************/
/*********************************************************
 * VERSION:      %version: 1 %
 * UPDATE DATE:  %date_created: 11/14/2016 7:50 AM %
 *
 * CONTACTS:
 *   Originator:   Khanh H Nguyen
 *   Updater:      %created_by: khanh-h-nguyen %
 *********************************************************/

/**
 * <Subject or Purpose of this file.
 *
 * NOTES/ASSUMPTIONS:
 * <If there is no notes or assumptions, then wirte None>
 *
 * REFERENCE:
 * <Requirement or spec doc>
 */
import { Injectable }     from '@angular/core';
import { AmenityListing }           from './amenitylisting';
@Injectable()
export class ListingService {
  ListingService: AmenityListing[];
}
