// source: employees.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.youtube_tutorial.Employee', null, global);
goog.exportSymbol('proto.youtube_tutorial.Employees', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.youtube_tutorial.Employee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.youtube_tutorial.Employee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.youtube_tutorial.Employee.displayName = 'proto.youtube_tutorial.Employee';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.youtube_tutorial.Employees = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.youtube_tutorial.Employees.repeatedFields_, null);
};
goog.inherits(proto.youtube_tutorial.Employees, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.youtube_tutorial.Employees.displayName = 'proto.youtube_tutorial.Employees';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.youtube_tutorial.Employee.prototype.toObject = function(opt_includeInstance) {
  return proto.youtube_tutorial.Employee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.youtube_tutorial.Employee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.youtube_tutorial.Employee.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    salary: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.youtube_tutorial.Employee}
 */
proto.youtube_tutorial.Employee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.youtube_tutorial.Employee;
  return proto.youtube_tutorial.Employee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.youtube_tutorial.Employee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.youtube_tutorial.Employee}
 */
proto.youtube_tutorial.Employee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSalary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.youtube_tutorial.Employee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.youtube_tutorial.Employee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.youtube_tutorial.Employee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.youtube_tutorial.Employee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSalary();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.youtube_tutorial.Employee.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.youtube_tutorial.Employee} returns this
 */
proto.youtube_tutorial.Employee.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.youtube_tutorial.Employee.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.youtube_tutorial.Employee} returns this
 */
proto.youtube_tutorial.Employee.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float salary = 3;
 * @return {number}
 */
proto.youtube_tutorial.Employee.prototype.getSalary = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.youtube_tutorial.Employee} returns this
 */
proto.youtube_tutorial.Employee.prototype.setSalary = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.youtube_tutorial.Employees.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.youtube_tutorial.Employees.prototype.toObject = function(opt_includeInstance) {
  return proto.youtube_tutorial.Employees.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.youtube_tutorial.Employees} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.youtube_tutorial.Employees.toObject = function(includeInstance, msg) {
  var f, obj = {
    employeeList: jspb.Message.toObjectList(msg.getEmployeeList(),
    proto.youtube_tutorial.Employee.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.youtube_tutorial.Employees}
 */
proto.youtube_tutorial.Employees.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.youtube_tutorial.Employees;
  return proto.youtube_tutorial.Employees.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.youtube_tutorial.Employees} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.youtube_tutorial.Employees}
 */
proto.youtube_tutorial.Employees.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.youtube_tutorial.Employee;
      reader.readMessage(value,proto.youtube_tutorial.Employee.deserializeBinaryFromReader);
      msg.addEmployee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.youtube_tutorial.Employees.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.youtube_tutorial.Employees.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.youtube_tutorial.Employees} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.youtube_tutorial.Employees.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmployeeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.youtube_tutorial.Employee.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Employee employee = 1;
 * @return {!Array<!proto.youtube_tutorial.Employee>}
 */
proto.youtube_tutorial.Employees.prototype.getEmployeeList = function() {
  return /** @type{!Array<!proto.youtube_tutorial.Employee>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.youtube_tutorial.Employee, 1));
};


/**
 * @param {!Array<!proto.youtube_tutorial.Employee>} value
 * @return {!proto.youtube_tutorial.Employees} returns this
*/
proto.youtube_tutorial.Employees.prototype.setEmployeeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.youtube_tutorial.Employee=} opt_value
 * @param {number=} opt_index
 * @return {!proto.youtube_tutorial.Employee}
 */
proto.youtube_tutorial.Employees.prototype.addEmployee = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.youtube_tutorial.Employee, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.youtube_tutorial.Employees} returns this
 */
proto.youtube_tutorial.Employees.prototype.clearEmployeeList = function() {
  return this.setEmployeeList([]);
};


goog.object.extend(exports, proto.youtube_tutorial);
