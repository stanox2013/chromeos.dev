/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Fields
import fullBlockField from '$fields/full-block';
import pictureField from '$fields/picture';
import titleField from '$fields/title';
import descriptionField from '$fields/description';
import eyebrowField from '$fields/eyebrow';
import backgroundsField from '$fields/backgrounds';
import linkField from '$fields/link';

// Subschemas
import hero from '$subschema/hero';
import featured from '$subschema/featured';
import share from '$subschema/share';
import software from '$subschema/software';
import themeSchema from '$subschema/theme';

// Schemas
import tag from './tag';
import post from './post';
import author from './author';
import theme from './theme';

export const schemaTypes = [
  // Schemas
  post,
  author,
  tag,
  theme,

  // Fields
  fullBlockField,
  pictureField,
  titleField,
  descriptionField,
  eyebrowField,
  backgroundsField,
  linkField,

  // Subschema
  hero,
  featured,
  share,
  software,
  themeSchema,
];
