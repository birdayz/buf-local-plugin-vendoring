// @generated by protoc-gen-es v2.2.2
// @generated from file example/v1/example.proto (package example.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file example/v1/example.proto.
 */
export declare const file_example_v1_example: GenFile;

/**
 * @generated from message example.v1.ExampleMessage
 */
export declare type ExampleMessage = Message<"example.v1.ExampleMessage"> & {
  /**
   * @generated from field: string example_string = 1;
   */
  exampleString: string;
};

/**
 * Describes the message example.v1.ExampleMessage.
 * Use `create(ExampleMessageSchema)` to create a new message.
 */
export declare const ExampleMessageSchema: GenMessage<ExampleMessage>;

