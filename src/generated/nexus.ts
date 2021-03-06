/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as faces from "../type"
import { core } from "@nexus/schema"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    url<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "URL";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    url<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "URL";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  URL: URL
}

export interface NexusGenRootTypes {
  Profile: faces.Profile;
  Query: {};
  Skills: faces.Skills;
  Works: faces.Works;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
  URL: NexusGenScalars['URL'];
}

export interface NexusGenFieldTypes {
  Profile: { // field return type
    address: string | null; // String
    github: NexusGenScalars['URL'] | null; // URL
    hobby: Array<string | null> | null; // [String]
    interest: Array<string | null> | null; // [String]
    selfIntroduction: Array<string | null> | null; // [String]
  }
  Query: { // field return type
    profile: NexusGenRootTypes['Profile'] | null; // Profile
    skills: Array<NexusGenRootTypes['Skills'] | null> | null; // [Skills]
    works: Array<NexusGenRootTypes['Works'] | null> | null; // [Works]
  }
  Skills: { // field return type
    imagePath: string | null; // String
    item: string | null; // String
    lang: string | null; // String
    level: number | null; // Int
  }
  Works: { // field return type
    date: string | null; // String
    imagePath: string | null; // String
    langs: Array<string | null> | null; // [String]
    title: string | null; // String
    url: string | null; // String
  }
}

export interface NexusGenArgTypes {
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Profile" | "Query" | "Skills" | "Works";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String" | "URL";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: {};
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}